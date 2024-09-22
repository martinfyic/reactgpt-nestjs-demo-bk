import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class OrthographyDto {
  @IsString()
  readonly prompt: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  readonly maxTokens?: number;
}
