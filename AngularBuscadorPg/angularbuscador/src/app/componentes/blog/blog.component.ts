import { Component, OnInit } from '@angular/core';
import { ConsolasService } from '../../servicios/consolas.service';
import {FormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  formularioEntrada: FormGroup;
  comments: any;

  comentsAsicrono: any;

  constructor(private activatedRoute: ActivatedRoute, private consolasService: ConsolasService) {
    this.formularioEntrada = new FormGroup({
      nombre: new FormControl('Nombre', [Validators.required, Validators.minLength(5)]),
      entrada: new FormControl('Lorem ipsum dolurus ....', [Validators.required, Validators.minLength(10), Validators.maxLength(30)])
    }, {updateOn: 'submit'});


    this.activatedRoute.params.subscribe(params => {
      this.comentsAsicrono = new Promise((resolve, reject) => {
        this.consolasService.getPublishments().subscribe(entradas => {
          this.comments = entradas;
          resolve(entradas);
          console.log('juegos: ',entradas);
        });
      });
    });

  }

  ngOnInit(): void {
    console.log(this.comments);
  }

  guardar() {
    const formularioData = this.formularioEntrada.value;

    console.log(formularioData);
    if (this.formularioEntrada.valid) {

      new Promise((resolve, reject) => {
        this.consolasService.saveBlog(formularioData).subscribe(blog => {
          console.log(blog);
          alert('Blog Guardado :D');
          resolve();
        });
      });


    }

  }

}
