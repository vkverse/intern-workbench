export function clamp(value,min,max) {
  if(![value,min,max].every(Number.isFinite)||min>max)throw new TypeError('Invalid bounds');
  return Math.min(max,Math.max(min,value));
}
