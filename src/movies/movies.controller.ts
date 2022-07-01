import { Controller, Get } from '@nestjs/common';

@Controller('movies')
export class MoviseController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne() {
    return 'This will return one movie';
  }
}
