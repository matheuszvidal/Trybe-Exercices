export type Product = {
  id: number,
  name: string,
  price: number,
  quantity: number,
  brands: string[]
};

export default function insertProducts(brand: string[], product: Product): string {
  const checkBrandInArray = brand.every((item) => product.brands.includes(item));
  if (checkBrandInArray) return `${product.name} adicionado(a) com o preço de R$ ${product.price}`;
  return 'Seu produto contém marcas indisponíveis.';
}
