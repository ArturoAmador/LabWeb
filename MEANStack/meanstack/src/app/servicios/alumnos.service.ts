import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class AlumnosService {

  constructor(public httpClient: HttpClient) {
    console.log('Servicio creado...');
  }

  getAlumnos() {
    const servicioRest = 'http://localhost:8585/students';
    return this.httpClient.get(servicioRest);
  }

  getAlumnosPalabraClave(palabraClave:string) {
    // Utilizamos template literals
    const servicioRest = `http://localhost:8585/students/busqueda/${palabraClave}`;
    return this.httpClient.get(servicioRest);
  }

}
