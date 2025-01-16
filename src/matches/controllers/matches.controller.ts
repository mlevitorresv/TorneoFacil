import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MatchesService } from '../services/matches.service';
import { CreateMatchDto } from '../dto/create-match.dto';
import { UpdateMatchDto } from '../dto/update-match.dto';

@Controller('matches')
export class MatchesController {
    constructor(private readonly matchesService: MatchesService) { }

    @Get()
    getAll() {
        return this.matchesService.getAll();
    }
    @Get(':id')
    getOne(@Param() params) {
        return this.matchesService.getOne(parseInt(params.id));
    }

    @Post()
    create(@Body() data: CreateMatchDto) {
        return this.matchesService.create(data);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.matchesService.delete(parseInt(params.id));
    }

    @Put(':id')
    update(@Param() params, @Body() data: UpdateMatchDto) {
        return this.matchesService.update(parseInt(params.id), data);
    }
}
