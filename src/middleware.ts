import { NextRequest, NextResponse } from "next/server";

async function middleware(request: NextRequest) {
  const clientIp = getClientIp(request);
  const isDevOnlyPage = checkIsDevOnlyPage(request.nextUrl.pathname);
  // artık reason da dönüyor
  const { isAllowed, reason } = await checkIpIsAllowed(clientIp);

  // 1) Eğer bloklu IP ise: doğrudan reddet (403)
  if (reason === "ip_blocked") {
    console.log(`Blocked IP attempt: ${clientIp}`);
    return new NextResponse("Forbidden", { status: 403 });
  }

  // 2) Dev-only sayfadayken izinli IP gelmişse anasayfaya yolla
  if (isDevOnlyPage && isAllowed) {
    console.log("Redirecting allowed IP from dev-only to home");
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 3) İzin yoksa, ama dev-only sayfada değilse, dev-only sayfasına yönlendir
  if (!isAllowed && !isDevOnlyPage) {
    console.log("Redirecting disallowed IP to dev-only page");
    return NextResponse.redirect(new URL("/access-dev-only", request.url));
  }

  // 4) Diğer tüm durumlarda yol ver
  return NextResponse.next();
}

async function checkIpIsAllowed(ip: string): Promise<{ isAllowed: boolean; reason: string }> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/ip-check`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ip }),
    });
    const { data } = await response.json();
    // data: { isAllowed: boolean, reason: string }
    console.log(`IP check for ${ip}:`, data);
    return { isAllowed: data.isAllowed, reason: data.reason };
  } catch (error) {
    // hata durumunda reddet
    console.error("IP check error:", error);
    return { isAllowed: false, reason: "ip_check_error" };
  }
}

function checkIsDevOnlyPage(pathname: string) {
  return pathname === "/access-dev-only";
}

function getClientIp(request: NextRequest) {
  const xff = request.headers.get("x-forwarded-for");
  return xff?.split(",")[0].trim() || request.headers.get("x-real-ip") || "unknown";
}

export const config = {
  matcher: [
    // Başında slash, sonra:
    // (?!             # negatif lookahead başlıyor
    //   api           # api rotası
    // | _next/static  # _next/static
    // | _next/image   # _next/image
    // | favicon\.ico  # favicon.ico
    // | icon          # icon klasörü
    // | img           # img klasörü
    // | mock          # mock klasörü
    // | partials      # partials klasörü
    // | .*\..*        # herhangi bir dosya uzantısı (png, css, js, svg…)
    // )
    // .*              # geri kalan her şey
    "/((?!api|_next/static|_next/image|favicon\\.ico|icon|img|mock|partials|.*\\..*).*)",
  ],
};

export default middleware;
