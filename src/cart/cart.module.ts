import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PurchaseService } from 'src/purchase/purchase.service';
import { ProductsService } from 'src/products/products.service';

@Module({
  controllers: [CartController],
  providers: [CartService, PrismaService, PurchaseService, ProductsService],
})
export class CartModule {}
