import { Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { TeamsService } from '../services/teams.service';

@Controller()
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) { }

    @Get()
    getAll() {
        return this.teamsService.getAll();
    }
    @Get(':id')
    getOne( @Param() params ) {
        return this.teamsService.getOne(params.id);
    }

    @Post()
    create() {
        return this.teamsService.create();
    }

    @Delete(':id')
    delete( @Param() params ) {
        return this.teamsService.delete(params.id);
    }

    @Put(':id')
    update( @Param() params ){
        return this.teamsService.update(params.id);
    }
}
