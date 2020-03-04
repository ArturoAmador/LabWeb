import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/comunes/encabezado/encabezado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ConsolasComponent } from './componentes/consolas/consolas.component';
import { APP_ROUTING } from './app.routes';
import { FichaTecnicaComponent } from './componentes/ficha-tecnica/ficha-tecnica.component';
import { CatalogoJuegosComponent } from './componentes/catalogo-juegos/catalogo-juegos.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PrincipalComponent,
    AcercadeComponent,
    ConsolasComponent,
    FichaTecnicaComponent,
    CatalogoJuegosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
