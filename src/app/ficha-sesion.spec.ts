import { TestBed } from '@angular/core/testing';
import { FichaSesion } from './ficha-sesion';

describe('FichaSesion', () => {
  it('pinta los datos que recibe y convierte la duración', () => {
    const ficha = TestBed.createComponent(FichaSesion);
    ficha.componentRef.setInput('sesion', {
      titulo: 'El faro', genero: 'Aventura', minutos: 78, hora: '17:30'
    });
    ficha.detectChanges();
    const vista: HTMLElement = ficha.nativeElement;
    expect(vista.querySelector('h2')?.textContent).toBe('El faro');
    expect(vista.querySelector('.genero')?.textContent).toBe('Aventura');
    expect(vista.textContent).toContain('1 h 18 min');
    expect(vista.querySelector('.hora strong')?.textContent).toBe('17:30');
  });
});
