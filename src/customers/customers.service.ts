import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomersEntity } from './entities/customers.entity';
import { CreateCustomerDto } from './dto/create-customer.dtp';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  public async findAll() {
    return await this.prisma.customers.findMany();
  }

  public async create(payload: CreateCustomerDto) {
    const customer = new CustomersEntity(payload);
    const createCustomer = await this.prisma.customers.create({
      data: customer,
    });

    return createCustomer;
  }

  public async findById(customerId: string) {
    const foundCustomer = await this.prisma.customers.findUnique({
      where: { id: customerId },
    });
    if (!foundCustomer) {
      throw new NotFoundException(
        'Costumer not found! Please check id and try again',
      );
    }
    return foundCustomer;
  }

  public async delete(customerId: string) {
    await this.findById(customerId);
    await this.prisma.customers.delete({ where: { id: customerId } });
  }

  public async partialUpdate(customerId: string, payload: UpdateCustomerDto) {
    await this.findById(customerId);

    const updateCustomer = await this.prisma.customers.update({
      where: { id: customerId },
      data: payload,
    });

    return updateCustomer;
  }
}
