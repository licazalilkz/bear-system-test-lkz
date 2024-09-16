import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}
  // define end poind e metodos associados ao decorator
  @Get()
  getHello(): string {
    return this.customerService.getHello();
  }

  @Post()
  public create(@Body() payload) {
    return this.customerService.create(payload);
  }
}
