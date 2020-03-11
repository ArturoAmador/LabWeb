import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ConsolasService, Consola} from '../../../servicios/consolas.service';


@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  juego;

  constructor(private activatedRoute: ActivatedRoute, private consolasService: ConsolasService) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      console.log(params['juego']);
      this.juego = this.consolasService.obteneJuego(params['id'], params['juego']);
      console.log(this.juego);
    });
  }

  ngOnInit() {
    console.log('juego Component!!');
  }

}
