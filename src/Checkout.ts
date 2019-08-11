import ICheckout from './ICheckout';

class Checkout implements ICheckout {
  subTotal: number;

  constructor() {
    this.subTotal = 0;
  }

  scan(item: string): void {
    if (item === 'A') {
      this.subTotal += 50;
    }
    if (item === 'B') {
      this.subTotal += 30;
    }
  }

  getTotalPrice(): number {
    return this.subTotal;
  }
}

export default Checkout;
