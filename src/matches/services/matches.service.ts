import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMatchDto } from '../dto/create-match.dto';
import { UpdateMatchDto } from '../dto/update-match.dto';

@Injectable()
export class MatchesService {
  constructor(private readonly prisma: PrismaService) { }

  async getAll() {
    const result = await this.prisma.match.findMany()
    return result;
  }
  async getOne(id: number) {
    const result = await this.prisma.match.findUnique({
      where: {
        id: id
      }
    })
    return result
  }
  async delete(id: number) {
    const result = await this.prisma.match.delete({
      where: {
        id: id
      }
    })
    return result
  }
  async create(data: CreateMatchDto) {
    const result = await this.prisma.match.create({data})
    return result
  }
  async update(id: number, data: UpdateMatchDto) {
    const result = await this.prisma.match.update({
      data: data,
      where: {
        id: id
      }
    })
    return result
  }
}
