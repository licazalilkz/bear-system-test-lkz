import { randomUUID } from 'crypto';

export class CustomersEntity {
  public readonly id: string;
  public name: string;
  public email: string;
  public phone: string;
  public address: string;

  constructor(props: {
    name: string;
    email: string;
    phone: string;
    address: string;
  }) {
    this.id = randomUUID();
    Object.assign(this, props);
  }
}
