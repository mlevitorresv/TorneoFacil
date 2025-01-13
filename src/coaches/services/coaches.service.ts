import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCoachDto } from '../dto/create-coach.dto';
import { UpdateCoachDto } from '../dto/update-coach.dto';

@Injectable()
export class CoachesService {
  constructor(private readonly prisma: PrismaService){}
  
  
    async getAll() {
      const result = await this.prisma.coach.findMany()
      return result;
    }
  
    async getOne(id: number) {
      const result = await this.prisma.coach.findUnique({
        where: {
          id: id
        }
      })
      return result
    }
  
    async delete(id: number) {
      const result = await this.prisma.coach.delete({
        where: {
          id: id
        }
      })
      return result
    }
  
    async create(data: CreateCoachDto) {
      const result = await this.prisma.coach.create({data})
      return result
    }
  
    async update(id: number, data: UpdateCoachDto) {
      const result = await this.prisma.coach.update({
        data: data,
        where: {
          id: id
        }
      })
      return result
    }
}
