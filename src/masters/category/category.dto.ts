import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}

export class UpdateCategoryDto {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  description: string;
}
