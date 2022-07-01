import { Module } from '@nestjs/common';
import { MoviseController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviseController],
  providers: [],
})
export class AppModule {}
