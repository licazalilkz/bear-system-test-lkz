import { randomUUID } from 'crypto';

export class PurchaseEntity {
  public readonly id: string;
  public customerId: string;
  public date: string;
  public totalValue: number;

  constructor(props: { customerId: string; totalValue: number }) {
    this.id = randomUUID();
    Object.assign(this, props);
  }
}
