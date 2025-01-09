import { IsString, IsInt, IsBoolean, Min, Max } from 'class-validator';



export class CreatePlayerDto {
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
    shirtNumber: number

    @IsBoolean()
    active: boolean
  
    @IsInt()
    teamId: number; // Clave foránea al equipo
  }