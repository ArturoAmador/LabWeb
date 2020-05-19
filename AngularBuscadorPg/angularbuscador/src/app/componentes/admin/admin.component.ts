import { Component, OnInit } from '@angular/core';
import { ConsolasService } from '../../servicios/consolas.service';
import {FormsModule, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  formularioConsola: FormGroup;
  formularioJuego: FormGroup;
  urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  constructor(private consolasService: ConsolasService) {

    this.formularioConsola = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.minLength(2)]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
      url: new FormControl('', [Validators.required, Validators.pattern(this.urlRegex)]),
      fichaTecnica: new FormControl('', [Validators.required, Validators.minLength(20)]),
    });

    this.formularioJuego = new FormGroup({
      consola: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      imagen: new FormControl('', [Validators.required, Validators.pattern(this.urlRegex)]),
      developer: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lanzamiento:  new FormControl('', [Validators.required]),
      imagen_1: new FormControl('', [Validators.required, Validators.pattern(this.urlRegex)]),
      imagen_2: new FormControl('', [Validators.required, Validators.pattern(this.urlRegex)]),
      imagen_3: new FormControl('', [Validators.required, Validators.pattern(this.urlRegex)]),
      blog_1: new FormControl('', [Validators.required, Validators.pattern(this.urlRegex)]),
      blog_2: new FormControl('', [Validators.required, Validators.pattern(this.urlRegex)]),
      blog_3: new FormControl('', [Validators.required, Validators.pattern(this.urlRegex)]),
    });
  }

  ngOnInit(): void {

    console.log('formulario admin!');

  }

  guardar(): void {
    console.log('guardar');
    const formularioData = this.formularioConsola.value;
    //console.log('formulario data: ', formularioData);

    if (this.formularioConsola.valid) {
      console.log(true);


      new Promise((resolve, reject) => {
        this.consolasService.saveConsola(formularioData).subscribe(consola => {
          console.log(consola);
          alert('Guardado');
          resolve();
        });
      });


    }

  }

  guardarJuego(): void {
    console.log('Guardar Juego');
    const formularioData = this.formularioJuego.value;
    console.log(formularioData);

    if (this.formularioJuego.valid) {
      console.log(true);


      new Promise((resolve, reject) => {
        this.consolasService.saveJuego(formularioData).subscribe(juego => {
          console.log(juego);
          alert('Juego Guardado');
          resolve();
        });
      });


    }


  }

}
