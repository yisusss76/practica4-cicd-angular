import { CarteleraService } from './cartelera.service';

describe('CarteleraService', () => {
  const cartelera = new CarteleraService();

  it('devuelve la película programada para cada día', () => {
    expect(cartelera.obtenerSesion('Viernes')?.titulo).toBe('La última bobina');
    expect(cartelera.obtenerSesion('Sábado')?.hora).toBe('19:00');
    expect(cartelera.obtenerSesion('Domingo')?.minutos).toBe(85);
  });

  it('devuelve undefined si el día no tiene sesión', () => {
    expect(cartelera.obtenerSesion('Lunes')).toBeUndefined();
  });

  it('expresa en minutos una duración inferior a una hora', () => {
    expect(cartelera.formatearDuracion(45)).toBe('45 min');
  });

  it('omite los minutos en las horas exactas', () => {
    expect(cartelera.formatearDuracion(120)).toBe('2 h');
  });

  it('muestra las horas y los minutos restantes', () => {
    expect(cartelera.formatearDuracion(96)).toBe('1 h 36 min');
  });
});
