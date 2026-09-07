export function summarizeOrders(orders) {
  return orders.reduce((summary,order)=>{
    if(!Number.isInteger(order.amount)||order.amount<0)throw new TypeError('Invalid amount');
    if(order.status==='paid'){summary.count++;summary.totalCents+=order.amount;}
    return summary;
  },{count:0,totalCents:0});
}
