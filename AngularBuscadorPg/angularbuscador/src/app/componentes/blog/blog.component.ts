import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  formularioEntrada: FormGroup;
  comments: [] = [];

  constructor() {
    this.formularioEntrada = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      entrada: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30)])
    });
  }

  ngOnInit(): void {
  }

  guardar() {
    const formularioData = this.formularioEntrada.value;
    this.comments.push({
      'nombre': formularioData.nombre,
      'timePlushie': new Date(),
      'entrada': formularioData.entrada
    });
    console.log(this.comments);
  }

}
