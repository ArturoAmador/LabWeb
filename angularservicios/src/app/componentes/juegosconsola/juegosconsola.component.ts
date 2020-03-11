import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ConsolasService, Consola} from '../../../servicios/consolas.service';

@Component({
  selector: 'app-juegosconsola',
  templateUrl: './juegosconsola.component.html',
  styleUrls: ['./juegosconsola.component.css']
})
export class JuegosconsolaComponent implements OnInit {

  juegos;
  consola;

  constructor(private activatedRoute: ActivatedRoute, private consolasService: ConsolasService) {
    this.activatedRoute.params.subscribe(params => {
      this.juegos = this.consolasService.obtieneJuegos(params['id']);
      this.consola = this.consolasService.obtieneConsola(params['id']);
    });
  }

  ngOnInit() {

  }

}
