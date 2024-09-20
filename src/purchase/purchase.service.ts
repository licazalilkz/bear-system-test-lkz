import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PurchaseService {
  constructor(private readonly prisma: PrismaService) {}
  public readonly cart = [];
  public readonly order = [];
  //
  public test(payload) {
    this.cart.push(payload);

    return 'adicionado ao carrinho';
  }
  // console.log(this.cart[0].products[0].productId);
  // console.dir(this.cart, { depth: null });

  public testLeitura() {
    let amount = 0;
    this.cart.forEach((cart) => {
      cart.products.forEach(async (product) => {
        const produto = await this.prisma.products.findUnique({
          where: { id: product.productId },
        });
        if (produto) {
          console.log(' ------------------------- ');
          console.log(produto);
          amount += produto.price * product.quantity;
        }
        console.log(`amount value = ${amount}`);
      });
    });
  }
  //
  create(createPurchaseDto: CreatePurchaseDto) {
    return 'This action adds a new purchase';
  }

  findAll() {
    return `This action returns all purchase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchase`;
  }

  update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    return `This action updates a #${id} purchase`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchase`;
  }
}
