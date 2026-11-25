import { Component, inject, Input } from '@angular/core';
import { CarteleraService, Sesion } from './cartelera.service';

@Component({
  selector: 'app-ficha-sesion',
  templateUrl: './ficha-sesion.html'
})
export class FichaSesion {
  @Input({ required: true }) sesion!: Sesion;
  readonly cartelera = inject(CarteleraService);
}
