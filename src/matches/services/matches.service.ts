import { Injectable } from '@nestjs/common';

@Injectable()
export class MatchesService {
  getAll(): string {
    return 'obtención de todos los partidos';
  }
  getOne(id: number): string {
    return 'obtención de un partido por el id: ' + id
  }
  delete(id: number): string {
    return 'eliminación de partido por id: ' + id
  }
  create(): string {
    return 'creación de partido'
  }
  update(id: number): string {
    return 'actualización de partido: ' + id
  }
}
