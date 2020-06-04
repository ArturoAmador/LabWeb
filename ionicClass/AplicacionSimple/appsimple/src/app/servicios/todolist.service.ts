import {Injectable} from '@angular/core';
import {Lista} from '../modelos/lista.model';
import { Socket } from 'ngx-socket-io';

@Injectable({
    providedIn: 'root'
})
export class TodolistService {
    // Generamos una conexion al evento ‘chat’. Esto nos devuelve un Observable
    // el cual vamos a utilizar para subscribirmos de tal forma que nos lleguen
    // todas las notificaciones cuando el socket del servicio de node haga un emit.

    mensajes = this.socket.fromEvent<string[]>('chat');
    listas: Lista[] = [];

    constructor(private socket: Socket) {
        console.log('Servicio inicializado...');

        const lista1 = new Lista('Pendientes de trabajo');
        const lista2 = new Lista('Pendientes personales');

        this.listas.push(lista1, lista2);
    }

    writeChat(mensaje: string) {
        console.log('Enviando mensaje: ' + mensaje);
        this.socket.emit('writeChat', mensaje);
    }

    readChat() {
        this.socket.emit('readChat');
    }

    cargarStorage() {
        if (localStorage.getItem('misListas')) {
            this.listas = JSON.parse(localStorage.getItem('misListas'));
        }
    }

    guardarStorage(lista: Lista) {
        this.listas.forEach(listaActual => {
            if (listaActual.id === lista.id) {
                const index: number = this.listas.indexOf(listaActual);
                this.listas.splice(index, 1);
                return;
            }
        });
        this.listas.push(lista);
        localStorage.setItem('misListas', JSON.stringify(this.listas));
    }

    obtieneListas() {
        return this.listas.filter(lisData => [lisData.finalizada]);
    }

    getLista(id: string | number) {
        id = Number(id);
        return this.listas.find(infoLista => {
            return infoLista.id === id;
        })
    }

}
