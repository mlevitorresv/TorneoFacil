import { Injectable } from '@nestjs/common';

@Injectable()
export class CoachesService {
  getAll(): string {
    return 'obtención de todos los entrenadores';
  }
  getOne(id: number): string {
    return 'obtención de un entrenador por el id: ' + id
  }
  delete(id: number): string {
    return 'eliminación de entrenador por id: ' + id
  }
  create(): string {
    return 'creación de entrenador'
  }
  update(id: number): string {
    return 'actualización de entrenador: ' + id
  }
}
