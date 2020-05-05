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
  juegoAsicrono: any;

  constructor(private activatedRoute: ActivatedRoute, private consolasService: ConsolasService) {
    this.activatedRoute.params.subscribe(params => {
      this.juegoAsicrono = new Promise((resolve, reject) => {
        this.palabrasBusqueda = params['palabrasBusqueda'];
        this.consolasService.buscarJuegos(this.palabrasBusqueda).subscribe(juegos => {
          this.juegos = juegos;
          resolve(juegos);
          console.log('juegos: ',juegos);
        });
      });
    });
  }

  ngOnInit(): void {
  }

  obtenerIdConsola(nombreConsola: string) {
    return this.consolasService.obtenerIDConsola(nombreConsola);
  }

}
