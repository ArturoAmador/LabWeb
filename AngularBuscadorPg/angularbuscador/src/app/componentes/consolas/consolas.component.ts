import { Component, OnInit } from '@angular/core';
import { ConsolasService, Consola } from '../../servicios/consolas.service';


@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.component.html',
  styleUrls: ['./consolas.component.css']
})
export class ConsolasComponent implements OnInit {

  consolas:any;

  consolasAsincrono: any;

  constructor( public consolasService: ConsolasService) {
    this.consolasAsincrono = new Promise((resolve, reject) => {
      this.consolasService.obtieneConsolas().subscribe( consola => {
        console.log(consola);
        this.consolas = consola;
        resolve(consola);
      });
    });
  }

  ngOnInit() {
  }

}
