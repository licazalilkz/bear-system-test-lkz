import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PurchaseService } from 'src/purchase/purchase.service';
import { ProductsService } from 'src/products/products.service';
import { CartEntity } from './entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly purchaseService: PurchaseService,
    private readonly productService: ProductsService,
  ) {}

  public async create(payload: CreateCartDto) {
    const cartProduct = new CartEntity(payload);
    const productId = await this.productService.findById(cartProduct.productId);
    const orderId = await this.purchaseService.findById(cartProduct.orderId);

    if (productId) {
      cartProduct.priceAtPuchace = productId.price * cartProduct.quantity;
      const UpdateQuantProducts = productId.quantProduct - cartProduct.quantity;
      await this.productService.partialUpdate(cartProduct.productId, {
        quantProduct: UpdateQuantProducts,
      });
    }
    if (orderId) {
      const updateTotalValue = orderId.totalValue + cartProduct.priceAtPuchace;
      await this.purchaseService.update(cartProduct.orderId, {
        totalValue: updateTotalValue,
      });
    }
    const productOnCart = await this.prisma.orderProducts.create({
      data: cartProduct,
    });
    return productOnCart;
  }

  public async findAll() {
    return await this.prisma.orderProducts.findMany();
  }

  public async findById(idOrderProducts: string) {
    const findOrderProducts = await this.prisma.orderProducts.findUnique({
      where: { id: idOrderProducts },
    });
    if (!findOrderProducts) {
      throw new NotFoundException('Order Products not found');
    }
    return findOrderProducts;
  }

  public async update(id: string, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  public async remove(id: string) {
    return `This action removes a #${id} cart`;
  }
}
