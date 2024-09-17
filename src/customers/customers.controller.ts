import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}
  // define end poind e metodos associados ao decorator
  @Get()
  public findAll() {
    return this.customerService.findAll();
  }

  @Get(':customerId')
  public findById(@Param('customerId') customerId: string) {
    return this.customerService.findById(customerId);
  }

  @Post()
  public create(@Body() payload) {
    return this.customerService.create(payload);
  }

  @Delete(':customerId')
  @HttpCode(204)
  public delete(@Param('customerId') customerId: string) {
    this.customerService.delete(customerId);
  }

  @Patch(':customerId')
  public partialUpdate(
    @Param('customerId') customerId: string,
    @Body() payload,
  ) {
    return this.customerService.partialUpdate(customerId, payload);
  }
}
