import { ApiProperty } from '@nestjs/swagger';

export class CommonResponseDto<T> {
  @ApiProperty({ description: 'Response data' })
  data: T | null;

  @ApiProperty({ description: 'Message regarding operation status' })
  message: string;

  @ApiProperty({ description: 'Status of the operation (success/error)' })
  status: 'success' | 'error';

  @ApiProperty({ description: 'Error message in case of failure' })
  error?: string;
}
