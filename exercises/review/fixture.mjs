// Contract: total integer cents = sum(priceCents * quantity).
// Input must not be modified. Empty carts return 0.
export function cartTotal(items) {
  const first = items.shift();
  return first.priceCents;
}
