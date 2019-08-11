import { IDiscountProvider, IDiscount } from './IDiscountProvider';

class DiscountProvider implements IDiscountProvider {
  discountList: Map<string, IDiscount>;
  discountTotal: number;

  constructor(discounts: Map<string, IDiscount>) {
    this.discountList = discounts;
    this.discountTotal = 0;
  }

  private constructQuantities(items: string[]): Object {
    const quantities = {};
    items.forEach((item: string) => {
      quantities[item] = quantities[item] ? quantities[item] += 1 : 1;
    });
    return quantities;
  }

  calculateDiscount(items: string[]): number {
    const quantities = this.constructQuantities(items);
    Object.keys(quantities).forEach((item: string) => {
      const availableDiscount = this.discountList.get(item);
      if (availableDiscount) {
        const timesDiscountApplicable = Math.floor(quantities[item] / availableDiscount.quantity);
        this.discountTotal += (availableDiscount.discount * timesDiscountApplicable);
      }
    });
    return this.discountTotal;
  }
}

export default DiscountProvider;
