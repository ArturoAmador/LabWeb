import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevalistaPage } from './nuevalista.page';

const routes: Routes = [
  {
    path: '',
    component: NuevalistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevalistaPageRoutingModule {}
