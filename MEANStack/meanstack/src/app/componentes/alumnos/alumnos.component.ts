import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../servicios/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnosAsincrono: any;

  constructor(public  alumnosService: AlumnosService) {

    this.alumnosAsincrono = new Promise((resolve, reject) => {
      this.alumnosService.getAlumnos().subscribe( alumnos => {
        console.log(alumnos);
        resolve(alumnos);
      });
    });

  }

  buscarAlumnos(palabra: string) {
    if (palabra.length > 0){
      this.alumnosAsincrono  = new Promise((resolve, reject) => {
        this.alumnosAsincrono.getAlumnosPalabraBusqueda().subscribe( alumnos => {
          console.log(alumnos);
          resolve(alumnos);
        });
      });
    }
  }

  ngOnInit(): void {
  }

}
