// Intentional training defect: quantities are ignored.
export function cartTotal(items) {
  return items.reduce((total, item) => total + item.priceCents, 0);
}
