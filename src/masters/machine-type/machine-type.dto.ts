import { ApiProperty } from '@nestjs/swagger';

export class CreateMachineTypeDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  hourlyRate: number;
}

export class UpdateMachineTypeDto {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  hourlyRate?: number;
}
