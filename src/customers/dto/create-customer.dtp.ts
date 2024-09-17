import { IsNotEmpty, IsString, maxLength, MaxLength } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  public name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  public email: string;

  @IsString()
  @MaxLength(11)
  public phone: string;

  @IsNotEmpty()
  @IsString()
  public address: string;
}
