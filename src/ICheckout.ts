interface ICheckout {
  scan(item: string): void;
  getTotalPrice(): number;
}

export default ICheckout;
