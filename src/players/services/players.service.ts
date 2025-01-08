import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersService {
  getAll(): string {
    return 'obtención de todos los jugadores';
  }
  getOne(id: number): string {
    return 'obtención de un jugador por el id: ' + id
  }
  delete(id: number): string {
    return 'eliminación de jugador por id: ' + id
  }
  create(): string {
    return 'creación de jugador'
  }
  update(id: number): string {
    return 'actualización de jugador: ' + id
  }
}
