import Checkout from './Checkout';
import PriceProvider from './PriceProvider';
import DiscountProvider from './DiscountProvider';
import { IDiscount } from './IDiscountProvider';

const price = (items: string): number => {
  const priceList = new PriceProvider({ A: 50, B: 30, C: 20, D: 15 });
  const discounts: Map<string, IDiscount> = new Map<string, IDiscount>();
  discounts.set('A', { discount: 20, quantity: 3 });
  discounts.set('B', { discount: 15, quantity: 2 });
  const discountProvider = new DiscountProvider(discounts);
  const checkout = new Checkout(priceList, discountProvider);
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

  it('returns 115 when ABCD scanned', () => {
    const total = price('ABCD');

    expect(total).toBe(115);
  });

  it('returns 100 when AA scanned', () => {
    const total = price('AA');

    expect(total).toBe(100);
  });
});

describe('Special Prices Applied', () => {

  it('returns 130 when AAA scanned', () => {
    const total = price('AAA');

    expect(total).toBe(130);
  });

  it('returns 180 when AAAA scanned', () => {
    const total = price('AAAA');

    expect(total).toBe(180);
  });

  it('returns 260 when AAAAAA scanned', () => {
    const total = price('AAAAAA');

    expect(total).toBe(260);
  });

  it('returns 45 when BB scanned', () => {
    const total = price('BB');

    expect(total).toBe(45);
  });
});
