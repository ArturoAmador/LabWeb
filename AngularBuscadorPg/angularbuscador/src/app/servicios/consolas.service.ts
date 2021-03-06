import { Injectable } from '@angular/core';
import { stringify } from "querystring";

import { HttpClient } from '@angular/common/http';

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

  private ENDPOINT: string = 'http://localhost:8585/';

  constructor(public httpClient: HttpClient) {
    console.log("Servicio de consolas creado...");
  }

  obtieneConsolas() {
    const consolaServicioRest = 'http://localhost:8585/plataformas';
    return this.httpClient.get(consolaServicioRest);
  }

  obtieneConsola(id: string) {
    const consolaServicioRest = 'http://localhost:8585/plataforma/' + id;
    return this.httpClient.get(consolaServicioRest);
  }

  obtieneJuegosConsola(idConsola: string) {
    const consolaServicioRest = 'http://localhost:8585/plataforma_juegos/' + idConsola;
    return this.httpClient.get(consolaServicioRest);
  }

  obtieneJuego(idJuego:string) {
    const consolaServicioRest = 'http://localhost:8585/buscar_juegos/' + idJuego;
    return this.httpClient.get(consolaServicioRest);
  }

  buscarConsolas(palabras: string){

    const consolaServicioRest = 'http://localhost:8585/plataforma/' + palabras;
    return this.httpClient.get(consolaServicioRest);

  }

  buscarJuegos(palabras: string): any {
    const consolaServicioRest = 'http://localhost:8585/buscar_juegos/' + palabras;
    return this.httpClient.get(consolaServicioRest);

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

  saveConsola(form: any) {

    console.log('save consola');
    console.log(form);

    const consolaServicioRest = 'http://localhost:8585/save_consola/';
    return this.httpClient.post(consolaServicioRest, form, {responseType: 'text'});

  }

  saveJuego(form: any) {

    console.log('save consola');
    console.log(form);

    const consolaServicioRest = 'http://localhost:8585/save_juego/';
    return this.httpClient.post(consolaServicioRest, form, {responseType: 'text'});

  }


  saveBlog(form: any) {
    console.log('SAVE BLOG!');
    const consolaServicioRest = 'http://localhost:8585/save_post/';
    return this.httpClient.post(consolaServicioRest, form, {responseType: 'text'});
  }

  getPublishments() {
    const consolaServicioRest = 'http://localhost:8585/blog/';
    return this.httpClient.get(consolaServicioRest);
  }

}

export interface Consola{
  nombre:string;
  descripcion:string;
  caracteristicas:string;
  imagen:string;
  juegos:any;
}
