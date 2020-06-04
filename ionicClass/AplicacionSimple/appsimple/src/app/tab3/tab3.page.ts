import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodolistService } from '../servicios/todolist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, OnDestroy{

  chat:string[];
  private chatSub: Subscription;
  userId = Math.floor(Math.random() * 99999); mensaje='';

  constructor(public todolistService: TodolistService) {}

  enviarMensaje(mensaje: string) {
    mensaje = "[" + this.userId + "]: " + mensaje;
    this.todolistService.writeChat(mensaje);
  }

  ngOnInit() {
    this.chatSub = this.todolistService.mensajes.subscribe(chat => this.chat = chat);
    this.todolistService.readChat();
  }

  ngOnDestroy() {
    this.chatSub.unsubscribe();
  }

}
