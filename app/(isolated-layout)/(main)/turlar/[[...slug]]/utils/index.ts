// Fiyatları normalize et (hepsi Euro cinsinden hesaplanacak)
export const normalizePrice = (priceStr: string): number => {
  const cleanPrice = priceStr.replace(/[^\d.,]/g, '').replace(',', '');
  const price = parseFloat(cleanPrice);

  if (priceStr.includes('₺')) return price / 30; // TL to EUR
  if (priceStr.includes('$')) return price * 0.92; // USD to EUR
  return price; // Already EUR
};