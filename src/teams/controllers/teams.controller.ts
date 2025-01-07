import { Controller, Delete, Get, HttpCode, Post, Put } from '@nestjs/common';
import { TeamsService } from '../services/teams.service';

@Controller()
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) { }

    @Get()
    getAll() {
        return this.teamsService.getAll();
    }
    getOne(id: number) {
        return this.teamsService.getOne(id);
    }

    @Post()
    create() {
        return this.teamsService.create();
    }

    @Delete()
    delete(id: number) {
        return this.teamsService.delete(id);
    }

    @Put()
    update(id: number){
        return this.teamsService.update(id);
    }
}
