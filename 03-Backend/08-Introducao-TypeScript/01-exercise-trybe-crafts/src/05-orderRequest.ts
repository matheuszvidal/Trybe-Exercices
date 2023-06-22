import { Item } from "./04-calculateTotalPrice";

export type Order = {
  id: number,
  customerName: string,
  customerEmail: string,
  items: Item[],
  status: "pendente" | "enviado" | "entregue"
}

export default function orderRequest(order: Order): string {
  const outOfStockProduct = order.items.find((item) => item.product.quantity === 0)
  
  if(outOfStockProduct) throw new Error(`Desculpe, ${outOfStockProduct.product.name} não está disponível no estoque`) 

  order = {
    ...order,
    status: 'enviado'
  }

  return `Olá ${order.customerName}, o seu pedido de ID ${order.id} foi ${order.status}.`
}
