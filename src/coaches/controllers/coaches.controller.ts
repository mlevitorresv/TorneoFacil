import { Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CoachesService } from '../services/coaches.service';

@Controller('coaches')
export class CoachesController {
    constructor(private readonly coachesService: CoachesService) { }

    @Get()
    getAll() {
        return this.coachesService.getAll();
    }
    @Get(':id')
    getOne( @Param() params ) {
        return this.coachesService.getOne(params.id);
    }

    @Post()
    create() {
        return this.coachesService.create();
    }

    @Delete(':id')
    delete( @Param() params ) {
        return this.coachesService.delete(params.id);
    }

    @Put(':id')
    update( @Param() params ){
        return this.coachesService.update(params.id);
    }
}
