import { Controller, Delete, Get, Body, Param, Post, Put } from '@nestjs/common';
import { TeamsService } from '../services/teams.service';
import { CreateTeamDto } from '../dto/create-team.dto';
import { UpdateTeamDto } from '../dto/update-team.dto';

@Controller('teams')
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) { }

    @Get()
    getAll() {
        return this.teamsService.getAll()
    }
    @Get(':id')
    getOne( @Param() params ) {
        return this.teamsService.getOne(parseInt(params.id))
    }

    @Post()
    create(@Body() data: CreateTeamDto) {
        return this.teamsService.create(data)
    }

    @Delete(':id')
    delete( @Param() params ) {
        return this.teamsService.delete(parseInt(params.id))
    }

    @Put(':id')
    update( @Param() params, @Body() data: UpdateTeamDto ){
        return this.teamsService.update(parseInt(params.id), data)
    }
}
