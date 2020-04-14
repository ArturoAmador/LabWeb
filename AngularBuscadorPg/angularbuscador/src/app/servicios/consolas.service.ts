import { Injectable } from '@angular/core';
import {stringify} from "querystring";

@Injectable()
export class ConsolasService {

  private consolas: Consola[] = [
    {
      nombre: "PC Master Race",
      descripcion: "Juegos para PC",
      caracteristicas: "Texto y listado de las características de la consola PC Master Race...",
      imagen: "assets/pcmr.jpg",
      juegos: [
        {
          imagen: "assets/tlou.jpg",
          nombre: "Juego PC 1",
          developer: "Naughty Dog",
          lanzamiento: "2013"
        },
        {
          imagen: "assets/p5.jpg",
          nombre: "Juego PC 2",
          developer: "P-Studio",
          lanzamiento: "2017"
        },
        {
          imagen: "assets/hzd.jpg",
          nombre: "Juego PC 3",
          developer: "Guerrilla Games",
          lanzamiento: "2017"
        }
      ]
    },
    {
      nombre: "Playstation 4",
      descripcion: "Juegos para PS4",
      caracteristicas: "Texto y listado de las características de la consola Playstation 4...",
      imagen: "assets/ps4.jpg",
      juegos: [
        {
          imagen: "assets/p5.jpg",
          nombre: "Persona 5",
          developer: "P-Studio",
          lanzamiento: "2017"
        },
        {
          imagen: "assets/tlou.jpg",
          nombre: "The Last of Us",
          developer: "Naughty Dog",
          lanzamiento: "2013"
        },
        {
          imagen: "assets/hzd.jpg",
          nombre: "Horizon: Zero Dawn",
          developer: "Guerrilla Games",
          lanzamiento: "2017"
        }
      ]
    },
    {
      nombre: "Xbox One",
      descripcion: "Juegos para Xbox One",
      caracteristicas: "Texto y listado de las características de la consola Xbox One...",
      imagen: "assets/xboxone.jpg",
      juegos: [
        {
          imagen: "assets/tlou.jpg",
          nombre: "Juego Xbox 1",
          developer: "Naughty Dog",
          lanzamiento: "2013"
        },
        {
          imagen: "assets/p5.jpg",
          nombre: "Juego Xbox 2",
          developer: "P-Studio",
          lanzamiento: "2017"
        },
        {
          imagen: "assets/hzd.jpg",
          nombre: "Juego Xbox 3",
          developer: "Guerrilla Games",
          lanzamiento: "2017"
        }
      ]
    },
    {
      nombre: "Nintendo Switch",
      descripcion: "Juegos para Nintendo Switch",
      caracteristicas: "Texto y listado de las características de la consola Nintendo Switch...",
      imagen: "assets/nswitch.jpg",
      juegos: [
        {
          imagen: "assets/tlou.jpg",
          nombre: "Juego Switch 1",
          developer: "Naughty Dog",
          lanzamiento: "2013"
        },
        {
          imagen: "assets/p5.jpg",
          nombre: "Juego Switch 2",
          developer: "P-Studio",
          lanzamiento: "2017"
        },
        {
          imagen: "assets/hzd.jpg",
          nombre: "Juego Switch 3",
          developer: "Guerrilla Games",
          lanzamiento: "2017"
        }
      ]
    }
  ];

  private comments: any = (JSON.parse(sessionStorage.getItem('publishment')) === null || JSON.parse(sessionStorage.getItem('publishment')) === undefined) ? [] : JSON.parse(sessionStorage.getItem('publishment'));

  constructor() {
    console.log("ConsolasService Creado...");
  }

  obtieneConsolas(): Consola[] {
    return this.consolas;
  }

  obtieneConsola(id:string) {
    return this.consolas[id];
  }

  obtieneJuegosConsola(idConsola:string) {
    return this.consolas[idConsola].juegos;
  }

  obtieneJuego(idConsola:string, idJuego:string) {
    return this.consolas[idConsola].juegos[idJuego];
  }

  buscarConsolas(palabras: string): Consola[] {

    let resultadosConsolas: Consola[] = [];
    palabras = palabras.toLowerCase();

    this.consolas.forEach(consolas => {
      const nombreConsola = consolas.nombre.toLowerCase();
      if (nombreConsola.indexOf(palabras) > -1) {
        //consolas.id = this.obtenerIDConsola(consolas.nombre);
        resultadosConsolas.push(consolas);
      }
    });

    return resultadosConsolas;

  }

  buscarJuegos(palabras: string): any {
    let resultadosJuegos = [];
    palabras = palabras.toLowerCase();

    this.consolas.forEach(consolas => {
      let juegos = consolas.juegos;
      juegos.forEach((juego, index) => {
        if (juego.nombre.indexOf(palabras) > -1) {
          juego.consola = consolas.nombre;
          juego.juegoId = index;
          resultadosJuegos.push(juego);
        }
      });
    });

    return resultadosJuegos;

  }

  obtenerIDConsola(nombreConsola: string): number {
    let idConsola = 0;

      if (nombreConsola === 'PC Master Race')
        idConsola = 0;
      else if (nombreConsola === 'Playstation 4')
        idConsola = 1;
      else if (nombreConsola === 'Xbox One')
        idConsola = 2;
      else if (nombreConsola === 'Nintendo Switch')
        idConsola = 3;

    return idConsola;
  }

  savePublishment(name: string, fecha: any, content: string) {
    let data = {
      name: name,
      fecha: fecha,
      content: content
    };
    console.log('data: ', data);
    console.log('*************** savePublishment ***************');
    this.comments.push(data);
    let comments = JSON.stringify(this.comments);
    console.log(comments)
    sessionStorage.setItem('publishment', comments);

  }

  getPublishments() {
    return this.comments;
  }

}

export interface Consola{
  nombre:string;
  descripcion:string;
  caracteristicas:string;
  imagen:string;
  juegos:any;
}
