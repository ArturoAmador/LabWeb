import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { Consola,ConsolasService } from "../../../servicios/consolas.service";

@Component({
  selector: 'app-resjuegos',
  templateUrl: './resjuegos.component.html',
  styleUrls: ['./resjuegos.component.css']
})
export class ResjuegosComponent implements OnInit {

  palabrasBusqueda: string;
  juegos: any[] = [];
  idConsola: number = 0;

  constructor(private activatedRoute:ActivatedRoute, private consolasService: ConsolasService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.palabrasBusqueda = params['palabrasBusqueda'];
      this.juegos = this.consolasService.buscarJuegos(this.palabrasBusqueda);
      console.log(this.juegos);


    });

  }

  obtenerIdConsola(nombreConsola: string) {
    return this.consolasService.obtenerIDConsola(nombreConsola);
  }

}
