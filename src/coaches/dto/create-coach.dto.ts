import { IsString, IsInt, IsBoolean, Min, Max } from 'class-validator';



export class CreateCoachDto {
    @IsString()
    name: string;
  
    @IsString()
    surnames: string;
  
    @IsInt()
    @Min(0)
    age: number;
  
    @IsString()
    position: string;
  
    @IsInt()
    teamId: number; // Clave foránea al equipo
  }