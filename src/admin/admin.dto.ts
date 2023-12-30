// admin.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  role: string;

  // Add other properties as needed
}

export class UpdateAdminDto {
  @ApiProperty()
  username?: string;

  @ApiProperty()
  password?: string;

  @ApiProperty()
  role?: string;

  // Add other properties as needed
}
