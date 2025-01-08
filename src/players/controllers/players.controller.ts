import { Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { PlayersService } from '../services/players.service';

@Controller()
export class PlayersController {
    constructor(private readonly playersService: PlayersService) { }

    @Get()
    getAll() {
        return this.playersService.getAll();
    }
    @Get(':id')
    getOne( @Param() params ) {
        return this.playersService.getOne(params.id);
    }

    @Post()
    create() {
        return this.playersService.create();
    }

    @Delete(':id')
    delete( @Param() params ) {
        return this.playersService.delete(params.id);
    }

    @Put(':id')
    update( @Param() params ){
        return this.playersService.update(params.id);
    }
}
