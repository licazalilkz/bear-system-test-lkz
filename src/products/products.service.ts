import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  public async findAll() {
    return await this.prisma.products.findMany();
  }

  public async create(payload: CreateProductDto) {
    const product = new ProductEntity(payload);
    const createProduct = await this.prisma.products.create({ data: product });
    return createProduct;
  }

  public async findById(productId: string) {
    const foundProduct = await this.prisma.products.findUnique({
      where: { id: productId },
    });
    if (!foundProduct) {
      throw new NotFoundException('Product not found');
    }
    return foundProduct;
  }

  public async delete(productId: string) {
    await this.findById(productId);
    await this.prisma.products.delete({ where: { id: productId } });
  }

  public async partialUpdate(productId: string, payload: UpdateProductDto) {
    await this.findById(productId);

    const updateProduct = await this.prisma.products.update({
      where: { id: productId },
      data: payload,
    });
    return updateProduct;
  }
}
