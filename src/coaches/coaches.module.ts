import { Module } from '@nestjs/common';
import { CoachesController } from './controllers/coaches.controller';
import { CoachesService } from './services/coaches.service';


@Module({
  imports: [],
  controllers: [CoachesController],
  providers: [CoachesService],
})
export class CoachesModule { }
