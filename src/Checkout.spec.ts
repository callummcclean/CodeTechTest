import Checkout from './Checkout';

describe('Totals with no special prices', () => {

  it('returns 0 when no items scanned', () => {
    const checkout = new Checkout();
    const total = checkout.getTotalPrice();

    expect(total).toBe(0);
  });

  it('returns 50 when A scanned', () => {
    const checkout = new Checkout();
    checkout.scan('A');
    const total = checkout.getTotalPrice();

    expect(total).toBe(50);
  });

  it('returns 80 when AB scanned', () => {
    const checkout = new Checkout();
    checkout.scan('A');
    checkout.scan('B');
    const total = checkout.getTotalPrice();

    expect(total).toBe(80);
  });
});
