import { randomUUID } from 'crypto';

export class ProductEntity {
  public readonly id: string;
  public name: string;
  public price: number;
  public quantProduct: number;
  public description: string;

  constructor(props: {
    name: string;
    price: number;
    quantProduct: number;
    description: string;
  }) {
    this.id = randomUUID();
    Object.assign(this, props);
  }
}
