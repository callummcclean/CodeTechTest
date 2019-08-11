import ICheckout from './ICheckout';
import IPriceProvider from './IPriceProvider';

class Checkout implements ICheckout {
  priceList: IPriceProvider;
  subTotal: number;
  counts: Object;

  constructor(priceList: IPriceProvider) {
    this.priceList = priceList;
    this.subTotal = 0;
    this.counts = {};
  }

  scan(item: string): void {
    this.counts[item] = this.counts[item] ? this.counts[item] += 1 : 1;
    this.subTotal += this.priceList.get(item);
  }

  getTotalPrice(): number {
    if (this.counts['A'] >= 3) {
      return this.subTotal - 20;
    }
    return this.subTotal;
  }
}

export default Checkout;
