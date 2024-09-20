import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  public async create(@Body() payload: CreatePurchaseDto) {
    return await this.purchaseService.create(payload);
  }

  @Get()
  public async findAll() {
    return await this.purchaseService.findAll();
  }

  @Get(':orderId')
  public async findById(@Param('orderId') orderId: string) {
    return await this.purchaseService.findById(orderId);
  }

  @Patch(':orderId')
  public async update(
    @Param('orderId') orderId: string,
    @Body() payload: UpdatePurchaseDto,
  ) {
    return await this.purchaseService.update(orderId, payload);
  }

  @Delete(':orderId')
  public async remove(@Param('orderId') id: string) {
    return this.purchaseService.remove(+id);
  }
}
