export function handler(req, res) {
  res.writeHead(501, {'content-type':'application/json'});
  res.end(JSON.stringify({error:'Not implemented'}));
}
