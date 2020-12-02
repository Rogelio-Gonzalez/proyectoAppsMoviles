import { AccordionComponent } from './accordion/accordion.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { StartComponent } from './start/start.component';
import { SlidesComponent } from './slides/slides.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [SlidesComponent, StartComponent, AccordionComponent],
  exports: [SlidesComponent, StartComponent, AccordionComponent],
  imports: [
    CommonModule, 
    FormsModule,
    IonicModule
  ]
})
export class ComponentsModule { }
