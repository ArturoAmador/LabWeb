import {Component, OnInit} from '@angular/core';
import {Lista} from '../modelos/lista.model';
import {ElementoLista} from '../modelos/elementolista.model';
import {AlertController} from '@ionic/angular';
import {TodolistService} from '../servicios/todolist.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-nuevalista',
    templateUrl: './nuevalista.page.html',
    styleUrls: ['./nuevalista.page.scss'],
})
export class NuevalistaPage implements OnInit {

    lista: Lista;
    elementosLista: ElementoLista[] = [];
    nombreLista = '';
    textoElemento = '';

    constructor(public alertController: AlertController, public todolistService: TodolistService, public router: Router) {
    }

    ngOnInit() {
    }

    agregarElemento() {
        if (this.textoElemento.length === 0) {
            return;
        }
        let nuevoElemento = new ElementoLista(this.textoElemento);
        this.elementosLista.push(nuevoElemento);
        this.textoElemento = '';
    }

    borrar(elementoListaIndex: number) {
        this.elementosLista.splice(elementoListaIndex, 1);
    }

    async guardaLista() {
        const listaRequerido = await this.alertController.create({
            header: 'Aviso',
            subHeader: '',
            message: 'Debe indicar el nombre de la lista',
            buttons: ['OK']
        });
        const elementosRequeridos = await this.alertController.create({
            header: 'Aviso',
            subHeader: '',
            message: 'Debe indicar por lo menos un elemento para la lista',
            buttons: ['OK']
        });
        if (this.nombreLista.length === 0) {
            await listaRequerido.present();
            return;
        }
        if (this.elementosLista.length === 0) {
            await elementosRequeridos.present();
            return;
        }
        this.lista = new Lista(this.nombreLista);
        this.lista.elementos = this.elementosLista;
        this.todolistService.guardarStorage(this.lista);
        this.nombreLista = '';
        this.elementosLista = [];
        this.router.navigateByUrl('/');

    }

}
