import ICheckout from './ICheckout';
import IPriceProvider from './IPriceProvider';

class Checkout implements ICheckout {
  priceList: IPriceProvider;
  subTotal: number;
  countOfA: number;

  constructor(priceList: IPriceProvider) {
    this.priceList = priceList;
    this.subTotal = 0;
    this.countOfA = 0;
  }

  scan(item: string): void {
    this.subTotal += this.priceList.get(item);
    if (item === 'A') {
      this.countOfA += 1;
    }
  }

  getTotalPrice(): number {
    if (this.countOfA === 3) {
      return this.subTotal - 20;
    }
    return this.subTotal;
  }
}

export default Checkout;
