import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePurchaseDto {
  @IsNotEmpty()
  @IsString()
  public customerId: string;

  @IsNumber()
  public totalValue: number;
}
