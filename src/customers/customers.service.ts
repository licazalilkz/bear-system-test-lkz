import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomersEntity } from './entities/customers.entity';
import { CreateCustomerDto } from './dto/create-customer.dtp';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomersService {
  private readonly database: Array<CustomersEntity> = [];
  constructor(private readonly prisma: PrismaService) {}

  public findAll() {
    return this.database;
  }

  public findById(customerId: string) {
    const foundCustomer = this.database.find(({ id }) => id === customerId);
    if (!foundCustomer) {
      throw new NotFoundException(
        'Costumer not found! Please check id and try again',
      );
    }
    return foundCustomer;
  }

  public create(payload: CreateCustomerDto) {
    const customer = new CustomersEntity(payload);
    this.database.push(customer);

    return customer;
  }

  public delete(customerId: string) {
    const foundCustomerIndex = this.database.findIndex(
      ({ id }) => id === customerId,
    );
    if (foundCustomerIndex === -1) {
      throw new NotFoundException(
        'Costumer not found! Please check id and try again',
      );
    }
    this.database.splice(foundCustomerIndex, 1);
  }

  public partialUpdate(customerId: string, payload: UpdateCustomerDto) {
    const foundCustomer = this.database.find(({ id }) => id === customerId);
    if (!foundCustomer) {
      throw new NotFoundException(
        'Costumer not found! Please check id and try again',
      );
    }

    Object.assign(foundCustomer, payload);

    return foundCustomer;
  }
}
