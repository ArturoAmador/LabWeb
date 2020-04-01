import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor() {

    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidoPaterno: new FormControl('', Validators.required),
      apellidoMaterno: new FormControl('', Validators.required),
      correoElectronico: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]")])
    });

  }

  ngOnInit(): void {
  }

  guardar() {
    console.log(this.formulario.value);
  }

}
