import { Component } from '@angular/core';
import { TodolistService } from '../servicios/todolist.service';
import { Router } from '@angular/router';
import { Lista } from '../modelos/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public todolistService: TodolistService, public router:Router) {

  }

  nuevaLista() {
    this.router.navigateByUrl('/tabs/tab1/nuevalista');
  }

  listaSeleccionada(lista: Lista) {
    this.router.navigateByUrl(`/tabs/tab1/modificalista/${lista.id}`);
  }

}
