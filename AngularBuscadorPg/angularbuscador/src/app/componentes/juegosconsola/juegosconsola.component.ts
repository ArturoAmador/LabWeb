import { Component, OnInit } from '@angular/core';
import { ConsolasService, Consola } from '../../servicios/consolas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-juegosconsola',
  templateUrl: './juegosconsola.component.html',
  styleUrls: ['./juegosconsola.component.css']
})
export class JuegosconsolaComponent implements OnInit {

  juegos: any;
  idConsola: string;
  juesgosAsincrono: any;

  //obtieneJuegosConsola
  constructor( private consolasService:ConsolasService, private activatedRoute:ActivatedRoute) {
     this.activatedRoute.params.subscribe(params => {
       console.log(params['id']);
       let idConsola = params['id'];
       this.juesgosAsincrono = new Promise((resolve, reject) => {
         this.consolasService.obtieneJuegosConsola(idConsola).subscribe(juegos => {
           console.log(juegos);
           this.juegos = juegos;
           resolve(juegos);
         });
       });
     });
  }

  ngOnInit() {
    this.juegos = this.consolasService.obtieneJuegosConsola(this.idConsola);
  }

}
