import { Component, OnInit } from '@angular/core';
import { ConsolasService } from '../../servicios/consolas.service';
import {FormsModule, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  formularioEntrada: FormGroup;
  comments = JSON.parse(sessionStorage.getItem('publishment'));

  constructor(private consolasService: ConsolasService) {
    this.formularioEntrada = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      entrada: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30)])
    });
  }

  ngOnInit(): void {
    console.log(this.comments);
  }

  guardar() {
    const formularioData = this.formularioEntrada.value;
    if (this.formularioEntrada.valid){
      this.consolasService.savePublishment(formularioData.nombre, new Date(), formularioData.entrada);
      this.comments = this.consolasService.getPublishments();
      console.log(this.comments);
    }

  }

}
