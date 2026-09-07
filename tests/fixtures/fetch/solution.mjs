export async function loadItems(fetcher) {
  const response=await fetcher('/api/items');
  if(!response.ok)throw new Error('HTTP '+response.status);
  const body=await response.json();
  if(!Array.isArray(body?.items))throw new TypeError('Expected items array');
  return body.items;
}
