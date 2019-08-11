import Checkout from './Checkout';

const price = (items: string): number => {
  const checkout = new Checkout();
  items.split('').forEach((item: string) => {
    checkout.scan(item);
  });
  return checkout.getTotalPrice();
};

describe('Totals with no special prices', () => {

  it('returns 0 when no items scanned', () => {
    const total = price('');

    expect(total).toBe(0);
  });

  it('returns 50 when A scanned', () => {
    const total = price('A');

    expect(total).toBe(50);
  });

  it('returns 80 when AB scanned', () => {
    const total = price('AB');

    expect(total).toBe(80);
  });

  it('returns 100 when ABC scanned', () => {
    const total = price('ABC');

    expect(total).toBe(100);
  });
});
