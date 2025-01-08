import { IsString, IsInt, IsBoolean, Min, Max, MaxLength, IsOptional } from 'class-validator';



export class CreateTeamDto {
    @IsString()
    name: string;
  
    @IsString()
    @MaxLength(3)
    abr: string;

    @IsString()
    color: string;

    @IsOptional()
    @IsInt({ each: true })
    playersIds?: number[];

    @IsOptional()
    @IsInt({ each: true })
    coachesIds?: number[];
  }