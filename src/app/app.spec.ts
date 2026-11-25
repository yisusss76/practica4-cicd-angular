import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('Cartelera del fin de semana', () => {
  it('abre el viernes con los tres días disponibles', () => {
    const pagina = TestBed.createComponent(App);
    pagina.detectChanges();
    const vista: HTMLElement = pagina.nativeElement;
    const botones = Array.from(vista.querySelectorAll('button'));
    expect(botones.map(boton => boton.textContent?.trim())).toEqual(['Viernes', 'Sábado', 'Domingo']);
    expect(botones[0].getAttribute('aria-pressed')).toBe('true');
    expect(vista.querySelector('h2')?.textContent).toBe('La última bobina');
  });

  it('al pulsar sábado cambia la selección, la película y la hora', () => {
    const pagina = TestBed.createComponent(App);
    pagina.detectChanges();
    const vista: HTMLElement = pagina.nativeElement;
    const botones = vista.querySelectorAll('button');
    botones[1].click();
    pagina.detectChanges();
    expect(botones[0].getAttribute('aria-pressed')).toBe('false');
    expect(botones[1].getAttribute('aria-pressed')).toBe('true');
    expect(vista.querySelector('h2')?.textContent).toBe('Órbita de papel');
    expect(vista.querySelector('.hora strong')?.textContent).toBe('19:00');
  });
});
