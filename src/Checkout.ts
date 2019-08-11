import ICheckout from './ICheckout';
import IPriceProvider from './IPriceProvider';

class Checkout implements ICheckout {
  priceList: IPriceProvider;
  subTotal: number;

  constructor(priceList: IPriceProvider) {
    this.priceList = priceList;
    this.subTotal = 0;
  }

  scan(item: string): void {
    this.subTotal += this.priceList.get(item);
  }

  getTotalPrice(): number {
    return this.subTotal;
  }
}

export default Checkout;
