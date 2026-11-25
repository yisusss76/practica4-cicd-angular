import { Component, inject } from '@angular/core';
import { CarteleraService } from './cartelera.service';
import { FichaSesion } from './ficha-sesion';

@Component({
  selector: 'app-root',
  imports: [FichaSesion],
  templateUrl: './app.html'
})
export class App {
  readonly cartelera = inject(CarteleraService);
  diaSeleccionado = this.cartelera.dias[0];

  seleccionarDia(dia: string): void {
    this.diaSeleccionado = dia;
  }
}
