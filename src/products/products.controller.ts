import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  public async findAll() {
    return await this.productsService.findAll();
  }

  @Get(':productId')
  public async findById(@Param('productId') productId: string) {
    return await this.productsService.findById(productId);
  }

  @Post()
  public async create(@Body() payload: CreateProductDto) {
    return await this.productsService.create(payload);
  }

  @Delete(':productId')
  @HttpCode(204)
  public async delete(@Param('productId') productId: string) {
    return await this.productsService.delete(productId);
  }

  @Patch(':productId')
  public async partialUpdate(
    @Param('productId') id: string,
    @Body() payload: UpdateProductDto,
  ) {
    return await this.productsService.partialUpdate(id, payload);
  }
}
