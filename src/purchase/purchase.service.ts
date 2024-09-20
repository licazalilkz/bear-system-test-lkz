import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PurchaseEntity } from './entities/purchase.entity';

@Injectable()
export class PurchaseService {
  constructor(private readonly prisma: PrismaService) {}
  // public readonly cart = [];
  // public readonly order = [];
  //
  // public test(payload) {
  //   this.cart.push(payload);

  //   return 'adicionado ao carrinho';
  // }
  // // console.log(this.cart[0].productorder;
  // // console.dir(this.cart, { depth: null });

  // public testLeitura() {
  //   let amount = 0;
  //   this.cart.forEach((cart) => {
  //     cart.products.forEach(async (product) => {
  //       const produto = await this.prisma.products.findUnique({
  //         where: { id: product.productId },
  //       });
  //       if (produto) {
  //         console.log(' ------------------------- ');
  //         console.log(produto);
  //         amount += produto.price * product.quantity;
  //       }
  //       console.log(`amount value = ${amount}`);
  //     });
  //   });
  // }
  //
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
