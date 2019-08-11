import IPriceProvider from './IPriceProvider';

class PriceProvider implements IPriceProvider {
  priceList: Object;

  constructor(priceList: Object) {
    this.priceList = priceList;
  }

  get(item: string): number {
    return this.priceList[item] ? this.priceList[item] : 0;
  }
}

export default PriceProvider;
