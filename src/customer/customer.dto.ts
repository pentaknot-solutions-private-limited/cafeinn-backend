// admin.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly phone: string;

  @ApiProperty({ required: false })
  readonly email?: string;
}

export class UpdateCustomerDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly phone: string;

  @ApiProperty({ required: false })
  readonly email?: string;
}
