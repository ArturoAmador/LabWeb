import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor() {

    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidoPaterno: new FormControl(),
      apellidoMaterno: new FormControl(),
      correoElectronico: new FormControl()
    });

  }

  ngOnInit(): void {
  }

  guardar() {
    console.log(this.formulario.value);
  }

}
