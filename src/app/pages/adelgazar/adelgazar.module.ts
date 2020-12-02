import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdelgazarPageRoutingModule } from './adelgazar-routing.module';

import { AdelgazarPage } from './adelgazar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdelgazarPageRoutingModule
  ],
  declarations: [AdelgazarPage]
})
export class AdelgazarPageModule {}
