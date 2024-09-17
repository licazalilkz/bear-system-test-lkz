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
import { CreateCustomerDto } from './dto/create-customer.dtp';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}

  @Get()
  public findAll() {
    return this.customerService.findAll();
  }

  @Get(':customerId')
  public findById(@Param('customerId') customerId: string) {
    return this.customerService.findById(customerId);
  }

  @Post()
  public create(@Body() payload: CreateCustomerDto) {
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
    @Body() payload: UpdateCustomerDto,
  ) {
    return this.customerService.partialUpdate(customerId, payload);
  }
}
