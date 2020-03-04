import { RouterModule, Routes } from '@angular/router';
// Se tienen que importar todas las rutas que vamos a utilizar
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ConsolasComponent } from './componentes/consolas/consolas.component';
import { FichaTecnicaComponent } from "./componentes/ficha-tecnica/ficha-tecnica.component";
import { CatalogoJuegosComponent } from "./componentes/catalogo-juegos/catalogo-juegos.component";

const APP_ROUTES: Routes = [
// Se inicializan todas las rutas que vamos a utilizar.
  { path: 'principal', component: PrincipalComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'consolas', component: ConsolasComponent },
  { path: 'consolas/ficha-tecnica', component: FichaTecnicaComponent },
  { path: 'consolas/ficha-tecnica/catalogo-juego', component: CatalogoJuegosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];
// Se tiene que importar APP_ROUTING en el archivo app.module.ts como un import,
// y dentro del arreglo de imports[]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
