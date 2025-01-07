import { Injectable } from '@nestjs/common';

@Injectable()
export class TeamsService {
  getAll(): string {
    return 'obtención de todos los equipos';
  }
  getOne(id: number): string {
    return 'obtención de un equipo por el id'
  }
  delete(id: number): string {
    return 'eliminación de equipo por id'
  }
  create(): string {
    return 'creación de equipo'
  }
  update(id: number): string {
    return 'actualización de equipo'
  }
}
