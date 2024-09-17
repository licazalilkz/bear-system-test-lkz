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
  public async findAll() {
    return await this.customerService.findAll();
  }

  @Get(':customerId')
  public async findById(@Param('customerId') customerId: string) {
    return await this.customerService.findById(customerId);
  }

  @Post()
  public async create(@Body() payload: CreateCustomerDto) {
    return await this.customerService.create(payload);
  }

  @Delete(':customerId')
  @HttpCode(204)
  public async delete(@Param('customerId') customerId: string) {
    await this.customerService.delete(customerId);
  }

  @Patch(':customerId')
  public async partialUpdate(
    @Param('customerId') customerId: string,
    @Body() payload: UpdateCustomerDto,
  ) {
    return await this.customerService.partialUpdate(customerId, payload);
  }
}
