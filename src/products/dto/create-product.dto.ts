import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  public name: string;

  @IsNotEmpty()
  @IsNumber()
  public price: number;

  @IsNotEmpty()
  @IsNumber()
  public quantProduct: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  public description: string;
}
