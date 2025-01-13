import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CoachesService } from '../services/coaches.service';
import { CreateCoachDto } from '../dto/create-coach.dto';
import { UpdateCoachDto } from '../dto/update-coach.dto';

@Controller('coaches')
export class CoachesController {
    constructor(private readonly coachesService: CoachesService) { }

    @Get()
    @Get()
        getAll() {
            return this.coachesService.getAll()
        }
        @Get(':id')
        getOne( @Param() params ) {
            return this.coachesService.getOne(parseInt(params.id))
        }
    
        @Post()
        create(@Body() data: CreateCoachDto) {
            return this.coachesService.create(data)
        }
    
        @Delete(':id')
        delete( @Param() params ) {
            return this.coachesService.delete(parseInt(params.id))
        }
    
        @Put(':id')
        update( @Param() params, @Body() data: UpdateCoachDto ){
            return this.coachesService.update(parseInt(params.id), data)
        }
}
