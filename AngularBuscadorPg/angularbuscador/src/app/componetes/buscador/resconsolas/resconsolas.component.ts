import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Consola, ConsolasService } from "../../../servicios/consolas.service";

@Component({
  selector: 'app-resconsolas',
  templateUrl: './resconsolas.component.html',
  styleUrls: ['./resconsolas.component.css']
})
export class ResconsolasComponent implements OnInit {

  consolas: any;
  palabrasBusqueda: string;
  cosolaAsincrona: any;

  constructor(private activatedRoute:ActivatedRoute, private consolasService: ConsolasService) {
    this.activatedRoute.params.subscribe(params => {
      console.log("resconsola: ",params['palabrasBusqueda']);
      this.palabrasBusqueda = params['palabrasBusqueda'];
      this.cosolaAsincrona = new Promise((resolve, reject) => {
        this.consolasService.buscarConsolas(this.palabrasBusqueda).subscribe(consola => {
          this.consolas = consola;
          resolve(consola);
        });
      });
      /*this.consolas = this.consolasService.buscarConsolas(this.palabrasBusqueda);
      //this.consolasService.obtenerIDConsola(this.consolas.nombre)
      console.log('this consolas');
      console.log(this.consolas);*/
    });

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log("resconsola: ",params['palabrasBusqueda']);
      this.palabrasBusqueda = params['palabrasBusqueda'];
      this.consolas = this.consolasService.buscarConsolas(this.palabrasBusqueda);
      //this.consolasService.obtenerIDConsola(this.consolas.nombre)
      console.log('this consolas');
      console.log(this.consolas);
    });
  }

}
