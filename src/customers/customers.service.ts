import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private readonly database = [];

  getHello(): string {
    return 'Hello World! get customers';
  }

  public create(payload) {
    this.database.push(payload);

    return payload;
  }
}
