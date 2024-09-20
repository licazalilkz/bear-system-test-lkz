import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  public async create(@Body() payload: CreateCartDto) {
    return this.cartService.create(payload);
  }

  @Get()
  public async findAll() {
    return this.cartService.findAll();
  }

  @Get(':id')
  public async findById(@Param('id') id: string) {
    return this.cartService.findById(id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateCartDto: UpdateCartDto,
  ) {
    return this.cartService.update(id, updateCartDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return this.cartService.remove(id);
  }
}
