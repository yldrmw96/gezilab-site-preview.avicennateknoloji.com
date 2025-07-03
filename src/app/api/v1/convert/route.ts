// app/api/v1/convert/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { amount, from, to } = await request.json();

    // Validate input
    if (
      typeof amount !== 'number' || isNaN(amount) ||
      !from || typeof from !== 'string' ||
      !to || typeof to !== 'string'
    ) {
      return NextResponse.json(
        { error: 'Missing or invalid "amount" (number), "from" (string), or "to" (string).' },
        { status: 400 }
      );
    }

    const base = from.toUpperCase();
    const target = to.toUpperCase();
    const apiUrl = `https://api.frankfurter.dev/v1/latest?base=${base}&symbols=${target}`;

    // Fetch the latest rate
    const response = await fetch(apiUrl);
    if (!response.ok) {
      return NextResponse.json(
        { error: `Frankfurter API error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    const rate = data.rates?.[target];
    if (rate === undefined) {
      return NextResponse.json(
        { error: `Rate not found for currency pair ${base}->${target}.` },
        { status: 404 }
      );
    }

    const converted = Number((amount * rate).toFixed(2));
    return NextResponse.json({ from: base, to: target, rate, converted });

  } catch (error) {
    console.error('Convert API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
