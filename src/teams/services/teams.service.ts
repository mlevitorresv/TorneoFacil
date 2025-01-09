import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTeamDto } from '../dto/create-team.dto';
import { UpdateTeamDto } from '../dto/update-team.dto';

@Injectable()
export class TeamsService {
  constructor(private readonly prisma: PrismaService) { }


  async getAll() {
    const result = await this.prisma.team.findMany();
    return result
  }
  async getOne(id: number) {
    const result = await this.prisma.team.findUnique({
      where:{
        id: id
      }
    })
    return result
  }
  async delete(id: number) {
    const result = await this.prisma.team.delete({
      where: {
        id: id
      }
    });
    return result
  }
  async create(data: CreateTeamDto) {
    const result = await this.prisma.team.create({data})
    return result
  }
  async update(id: number, data: UpdateTeamDto) {
    const result = await this.prisma.team.update({
      data: data,
      where: {
        id: id
      }
    })
    return result
  }
}
