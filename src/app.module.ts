import { Module } from '@nestjs/common';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';
import { CoachesModule } from './coaches/coaches.module';

@Module({
  imports: [TeamsModule, PlayersModule, CoachesModule],
})

export class AppModule { }
