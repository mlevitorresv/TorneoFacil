import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PlayersService } from '../services/players.service';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';

@Controller('players')
export class PlayersController {
    constructor(private readonly playersService: PlayersService) { }

    @Get()
    getAll() {
        return this.playersService.getAll()
    }
    @Get(':id')
    getOne(@Param() params) {
        return this.playersService.getOne(parseInt(params.id))
    }

    @Post()
    create(@Body() data: CreatePlayerDto) {
        return this.playersService.create(data)
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.playersService.delete(parseInt(params.id))
    }

    @Put(':id')
    update(@Param() params, @Body() data: UpdatePlayerDto) {
        return this.playersService.update(parseInt(params.id), data)
    }
}
