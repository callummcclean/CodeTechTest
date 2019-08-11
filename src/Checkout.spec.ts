import Checkout from './Checkout';

describe('Totals with no special prices', () => {

  it('returns 0 when no items scanned', () => {
    const checkout = new Checkout();
    const total = checkout.getTotalPrice();

    expect(total).toBe(0);
  });
});
