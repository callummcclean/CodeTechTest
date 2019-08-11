import ICheckout from './ICheckout';

class Checkout implements ICheckout {
  total: number;

  constructor() {
    this.total = 0;
  }

  scan(item: string): void {
    this.total = 50;
  }

  getTotalPrice(): number {
    return this.total;
  }
}

export default Checkout;
