export function cartTotal(items) {
  return items.reduce((total,{priceCents,quantity})=>{
    if(![priceCents,quantity].every(n=>Number.isInteger(n)&&n>=0))throw new TypeError('Invalid cart item');
    return total+priceCents*quantity;
  },0);
}
