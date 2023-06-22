import { Product } from "./02-insertProducts"

export type Item = {
  product: Product,
  quantity: number,
  phrase: string,
  brand: string
}

export default function calculateTotalPrice(items: Item[]): number {
  if (items.length === 0) return 0

  const totalPrice = items.reduce((acc, item) => {
    const itemPrice = item.product.price * item.quantity;
    return acc + itemPrice;
  }, 0);

  return Number(totalPrice.toFixed(2));
}
