import { Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { MatchesService } from '../services/matches.service';

@Controller('matches')
export class MatchesController {
    constructor(private readonly matchesService: MatchesService) { }

    @Get()
    getAll() {
        return this.matchesService.getAll();
    }
    @Get(':id')
    getOne( @Param() params ) {
        return this.matchesService.getOne(params.id);
    }

    @Post()
    create() {
        return this.matchesService.create();
    }

    @Delete(':id')
    delete( @Param() params ) {
        return this.matchesService.delete(params.id);
    }

    @Put(':id')
    update( @Param() params ){
        return this.matchesService.update(params.id);
    }
}
