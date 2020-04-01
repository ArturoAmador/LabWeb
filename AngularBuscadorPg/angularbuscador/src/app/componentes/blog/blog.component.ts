import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  formularioEntrada: FormGroup;

  constructor() {
    this.formularioEntrada = new FormGroup()
  }

  ngOnInit(): void {
  }

}
