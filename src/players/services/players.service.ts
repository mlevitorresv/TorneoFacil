import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';

@Injectable()
export class PlayersService {
  constructor(private readonly prisma: PrismaService){}


  async getAll() {
    const result = await this.prisma.player.findMany()
    return result;
  }

  async getOne(id: number) {
    const result = await this.prisma.player.findUnique({
      where: {
        id: id
      }
    })
    return result
  }

  async delete(id: number) {
    const result = await this.prisma.player.delete({
      where: {
        id: id
      }
    })
    return result
  }

  async create(data: CreatePlayerDto) {
    const result = await this.prisma.player.create({data})
    return result
  }

  async update(id: number, data: UpdatePlayerDto) {
    const result = await this.prisma.player.update({
      data: data,
      where: {
        id: id
      }
    })
    return result
  }
}
