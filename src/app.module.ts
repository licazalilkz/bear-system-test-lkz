import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [CustomersModule, ProductsModule, PrismaModule, PurchaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
