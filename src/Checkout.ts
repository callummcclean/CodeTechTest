import ICheckout from './ICheckout';

class Checkout implements ICheckout {

  scan(item: string): void {
    throw new Error('Method not implemented.');
  }

  getTotalPrice(): number {
    return 0;
  }
}

export default Checkout;
