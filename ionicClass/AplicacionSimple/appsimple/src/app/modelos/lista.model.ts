import {ElementoLista} from './elementolista.model';

export class Lista {
    id: number;
    nombre: string;
    finalizada: boolean;
    elementos: ElementoLista[];

    constructor(nombre: string) {
        this.id = new Date().getTime();
        this.nombre = nombre;
        this.finalizada = false;
        this.elementos = [];
    }
}
