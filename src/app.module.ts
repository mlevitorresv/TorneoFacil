import { Module } from '@nestjs/common';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';
import { CoachesModule } from './coaches/coaches.module';
import { MatchesModule } from './matches/matches.module';

@Module({
  imports: [TeamsModule, PlayersModule, CoachesModule, MatchesModule],
})

export class AppModule { }
