import ICheckout from './ICheckout';
import IPriceProvider from './IPriceProvider';
import { IDiscountProvider } from './IDiscountProvider';

class Checkout implements ICheckout {
  priceList: IPriceProvider;
  discountProvider: IDiscountProvider;
  items: string[];
  subTotal: number;

  constructor(priceList: IPriceProvider, discountProvider: IDiscountProvider) {
    this.priceList = priceList;
    this.discountProvider = discountProvider;
    this.items = [];
    this.subTotal = 0;
  }

  scan(item: string): void {
    this.items.push(item);
    this.subTotal += this.priceList.get(item);
  }

  getTotalPrice(): number {
    const discount = this.discountProvider.calculateDiscount(this.items);
    return this.subTotal - discount;
  }
}

export default Checkout;
