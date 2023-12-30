import { ApiProperty } from '@nestjs/swagger';

export class CreateInventoryDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly category: string;

  @ApiProperty()
  readonly quantity: number;

  @ApiProperty()
  readonly price: number;

  @ApiProperty()
  readonly costPrice: number;
}

export class UpdateInventoryDto {
  @ApiProperty()
  readonly name?: string;

  @ApiProperty()
  readonly description?: string;

  @ApiProperty()
  readonly category?: string;

  @ApiProperty()
  readonly quantity?: number;

  @ApiProperty()
  readonly price?: number;

  @ApiProperty()
  readonly costPrice?: number;
}
