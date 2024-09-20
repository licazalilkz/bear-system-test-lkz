import { randomUUID } from 'crypto';

export class CartEntity {
  public readonly id: string;
  public orderId: string;
  public productId: string;
  public quantity: number;
  public priceAtPuchace: number;

  constructor(props: {
    orderId: string;
    productId: string;
    quantity: number;
    priceAtPuchace: number;
  }) {
    this.id = randomUUID();
    Object.assign(this, props);
  }
}
