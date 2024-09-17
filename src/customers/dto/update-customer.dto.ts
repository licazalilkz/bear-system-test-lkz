import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dtp';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
