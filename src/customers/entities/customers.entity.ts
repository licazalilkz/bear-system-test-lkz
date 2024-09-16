import { randomUUID } from 'crypto';

export class CustomersEntity {
  public readonly id: string;
  public name: string;
  public email: string;
  public phone: string;
  public address: string;

  constructor() {
    this.id = randomUUID();
  }
}
