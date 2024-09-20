import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PurchaseEntity } from './entities/purchase.entity';

@Injectable()
export class PurchaseService {
  constructor(private readonly prisma: PrismaService) {}

  public async create(payload: CreatePurchaseDto) {
    const order = new PurchaseEntity(payload);
    const createOrder = await this.prisma.order.create({ data: order });
    return createOrder;
  }

  public async findAll() {
    return await this.prisma.order.findMany();
  }

  public async findById(orderId: string) {
    const findOrder = await this.prisma.order.findUnique({
      where: { id: orderId },
    });
    if (!findOrder) {
      throw new NotFoundException('Order not found');
    }
    return findOrder;
  }

  public async update(orderId: string, payload: UpdatePurchaseDto) {
    await this.findById(orderId);

    const updateOrde = await this.prisma.order.update({
      where: { id: orderId },
      data: payload,
    });
    return updateOrde;
  }

  public async remove(id: number) {
    return `This action removes a #${id} purchase`;
  }
}
