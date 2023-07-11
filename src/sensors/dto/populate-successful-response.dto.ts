import { ApiProperty } from '@nestjs/swagger';
export class PopulateSuccessfulResponseDto {
  @ApiProperty({
    example: '201',
  })
  statusCode: number;

  @ApiProperty({
    example: 'Sensores padrão adicionados ao banco de dados com sucesso',
  })
  message: string;
}
