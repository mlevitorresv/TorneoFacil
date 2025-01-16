import { Module } from '@nestjs/common';
import { MatchesController } from './controllers/matches.controller';
import { MatchesService } from './services/matches.service';


@Module({
  imports: [],
  controllers: [MatchesController],
  providers: [MatchesService],
})
export class MatchesModule { }
