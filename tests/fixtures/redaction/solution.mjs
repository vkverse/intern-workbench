export function redact(value) {
  if(Array.isArray(value))return value.map(redact);
  if(value===null||typeof value!=='object')return value;
  return Object.fromEntries(Object.entries(value).map(([key,item])=>[key,['password','token','authorization'].includes(key.toLowerCase())?'[REDACTED]':redact(item)]));
}
