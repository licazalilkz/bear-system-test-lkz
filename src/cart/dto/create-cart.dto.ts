import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCartDto {
  @IsNotEmpty()
  @IsString()
  public orderId: string;

  @IsNotEmpty()
  @IsString()
  public productId: string;

  @IsNumber()
  @IsNotEmpty()
  public quantity: number;

  @IsNumber()
  public priceAtPuchace: number;
}
