export function handler(req,res) {
  let status=200,body;
  if(req.method!=='GET'){status=405;body={error:'Method not allowed'};}
  else if(req.url==='/health')body={status:'ok'};
  else if(req.url==='/api/items')body={items:[]};
  else {status=404;body={error:'Not found'};}
  res.writeHead(status,{'content-type':'application/json'});
  res.end(JSON.stringify(body));
}
