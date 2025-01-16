// src/match/dto/create-match.dto.ts
import { IsEnum, IsInt, IsOptional, IsDateString, Min } from 'class-validator';
import { MatchState } from '@prisma/client';  // Importar el enum desde Prisma si es que lo definiste allí

export class CreateMatchDto {
  @IsEnum(MatchState)
  state: MatchState;

  @IsDateString()
  day: string;  // Formato de fecha

  @IsInt()
  @Min(0)
  localGoals: number;

  @IsInt()
  @Min(0)
  visitorGoals: number;

  @IsOptional()
  @IsInt()
  winnerId?: number;  // Si es opcional, no se requiere al crear el partido

  @IsInt()
  localTeamId: number;

  @IsInt()
  visitorTeamId: number;
}
