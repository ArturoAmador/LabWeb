import {Injectable} from '@angular/core';

@Injectable()
export class ConsolasService {
  private consolas: Consola[] = [
    {
      nombre: 'PC Master Race',
      descripcion: 'Juegos para PC',
      caracteristicas: 'Texto y listado de las características de la consola PC Master Race...',
      imagen: 'assets/pcmr.jpg'
    },
    {
      nombre: 'Playstation 4',
      descripcion: 'Juegos para PS4',
      caracteristicas: 'Texto y listado de las características de la consola Playstation 4...',
      imagen: 'assets/ps4.jpg'
    },
    {
      nombre: 'Xbox One',
      descripcion: 'Juegos para Xbox One',
      caracteristicas: 'Texto y listado de las características de la consola Xbox One...',
      imagen: 'assets/xboxone.jpg'
    },
    {
      nombre: 'Nintendo Switch',
      descripcion: 'Juegos para Nintendo Switch',
      caracteristicas: 'Texto y listado de las características de la consola Nintendo Switch...',
      imagen: 'assets/nswitch.jpg'
    }
  ];

  constructor() {
    console.log('ConsolasService Creado...');
  }

  obtieneConsolas(): Consola[] {
    return this.consolas;
  }

  obtieneConsola(id: string): Consola[]{
    return this.consolas[id];
  }

}

export interface Consola {
  nombre:string;
  descripcion:string;
  caracteristicas:string;
  imagen:string;
}
