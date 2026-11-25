import { Injectable } from '@angular/core';

export interface Sesion {
  titulo: string;
  genero: string;
  minutos: number;
  hora: string;
}

@Injectable({ providedIn: 'root' })
export class CarteleraService {
  readonly dias = ['Viernes', 'Sábado', 'Domingo'];

  private readonly sesiones: Sesion[] = [
    { titulo: 'La última bobina', genero: 'Misterio', minutos: 96, hora: '20:30' },
    { titulo: 'Órbita de papel', genero: 'Ciencia ficción', minutos: 108, hora: '19:00' },
    { titulo: 'Un verano en la plaza', genero: 'Comedia', minutos: 85, hora: '18:15' }
  ];

  obtenerSesion(dia: string): Sesion | undefined {
    const posicion = this.dias.indexOf(dia);
    return this.sesiones[posicion];
  }

  formatearDuracion(minutos: number): string {
    const horas = Math.floor(minutos / 60);
    const resto = minutos % 60;
    if (horas === 0) {
      return resto + ' min';
    }
    if (resto === 0) {
      return horas + ' h';
    }
    return horas + ' h ' + resto + ' min';
  }
}
