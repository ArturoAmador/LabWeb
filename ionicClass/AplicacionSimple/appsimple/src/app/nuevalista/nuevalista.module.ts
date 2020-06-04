import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevalistaPageRoutingModule } from './nuevalista-routing.module';

import { NuevalistaPage } from './nuevalista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevalistaPageRoutingModule
  ],
  declarations: [NuevalistaPage]
})
export class NuevalistaPageModule {}
