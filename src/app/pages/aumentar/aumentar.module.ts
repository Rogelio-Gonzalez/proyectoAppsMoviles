import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AumentarPageRoutingModule } from './aumentar-routing.module';

import { AumentarPage } from './aumentar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AumentarPageRoutingModule
  ],
  declarations: [AumentarPage]
})
export class AumentarPageModule {}
