interface IDiscountProvider {
  calculateDiscount(items: string[]): number;
}

interface IDiscount {
  quantity: number;
  discount: number;
}

export { IDiscountProvider, IDiscount };
