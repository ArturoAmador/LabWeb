import {Injectable} from '@angular/core';

@Injectable()
export class ConsolasService {
  private consolas: Consola[] = [
    {
      nombre: 'PC Master Race',
      descripcion: 'Juegos para PC',
      caracteristicas: 'Texto y listado de las características de la consola PC Master Race...',
      imagen: 'assets/pcmr.jpg',
      juegos:[
        {
          imagen:'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheWitcher3WildHuntCompleteEdition_enGB.jpg',
          nombre:'The Witcher 3 the wild hunt',
          developer:'Beto Vasquez',
          lanzamiento:'2015'
        },
        {
          imagen: 'https://d3tg06jbotvai2.cloudfront.net/game_tetiere/img/resident-evil-4-img-4.jpg',
          nombre: 'Resident Evil 4',
          developer: 'Arturo Amador',
          lanzamiento: '2004',
        },
        {
          imagen: 'https://areajugones.sport.es/wp-content/uploads/2018/11/hitman2.jpg',
          nombre: 'Hitman 2',
          developer: 'Arturo',
          lanzamiento: '2019',
        }
      ],
    },
    {
      nombre: 'Playstation 4',
      descripcion: 'Juegos para PS4',
      caracteristicas: 'Texto y listado de las características de la consola Playstation 4...',
      imagen: 'assets/ps4.jpg',
      juegos:[
        {
          imagen:'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheWitcher3WildHuntCompleteEdition_enGB.jpg',
          nombre:'The Witcher 3 the wild hunt',
          developer:'Beto Vasquez',
          lanzamiento:'2015'
        },
        {
          imagen: 'https://d3tg06jbotvai2.cloudfront.net/game_tetiere/img/resident-evil-4-img-4.jpg',
          nombre: 'Resident Evil 4',
          developer: 'Arturo Amador',
          lanzamiento: '2004',
        },
        {
          imagen: 'https://areajugones.sport.es/wp-content/uploads/2018/11/hitman2.jpg',
          nombre: 'Hitman 2',
          developer: 'Arturo',
          lanzamiento: '2019',
        }
      ],
    },
    {
      nombre: 'Xbox One',
      descripcion: 'Juegos para Xbox One',
      caracteristicas: 'Texto y listado de las características de la consola Xbox One...',
      imagen: 'assets/xboxone.jpg',
      juegos:[
        {
          imagen:'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheWitcher3WildHuntCompleteEdition_enGB.jpg',
          nombre:'The Witcher 3 the wild hunt',
          developer:'Beto Vasquez',
          lanzamiento:'2015'
        },
        {
          imagen: 'https://d3tg06jbotvai2.cloudfront.net/game_tetiere/img/resident-evil-4-img-4.jpg',
          nombre: 'Resident Evil 4',
          developer: 'Arturo Amador',
          lanzamiento: '2004',
        },
        {
          imagen: 'https://store-images.s-microsoft.com/image/apps.15328.14011015795942652.ca67db1b-d21e-47e9-bbb4-5ece2ce3f774.516eb47c-697b-46db-8ba6-f44da2e5592d',
          nombre: 'Halo: Master Chief Collection',
          developer: 'Beto Vasquez',
          lanzamiento: '2014',
        }
      ],
    },
    {
      nombre: 'Nintendo Switch',
      descripcion: 'Juegos para Nintendo Switch',
      caracteristicas: 'Texto y listado de las características de la consola Nintendo Switch...',
      imagen: 'assets/nswitch.jpg',
      juegos:[
        {
          imagen:'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheWitcher3WildHuntCompleteEdition_enGB.jpg',
          nombre:'The Witcher 3 the wild hunt',
          developer:'Beto Vasquez',
          lanzamiento:'2015'
        },
        {
          imagen:'https://www.gamecool.mx/wp-content/uploads/2018/10/Splatoon-2-con-guia-600x748.jpg',
          nombre:'SPlatoon 2',
          developer:'Beto Vasquez',
          lanzamiento:'2017'
        },
        {
          imagen: 'https://d3tg06jbotvai2.cloudfront.net/game_tetiere/img/resident-evil-4-img-4.jpg',
          nombre: 'Resident Evil 4',
          developer: 'Arturo Amador',
          lanzamiento: '2004',
        }
      ],
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

  obtieneJuegos(id: string):[]{
    return this.consolas[id].juegos;
  }

  obteneJuego(id: string, name: string){
    const juegosArray = this.consolas[id].juegos;
    let juegoFound;
    juegosArray.forEach(juego => {
      if (juego.nombre == name){
        juegoFound = juego;
      }
    });
    return juegoFound;

  }

}

export interface Consola {
  nombre:string;
  descripcion:string;
  caracteristicas:string;
  imagen:string;
  juegos:any;
}
