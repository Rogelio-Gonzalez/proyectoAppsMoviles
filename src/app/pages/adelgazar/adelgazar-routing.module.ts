import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdelgazarPage } from './adelgazar.page';

const routes: Routes = [
  {
    path: '',
    component: AdelgazarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdelgazarPageRoutingModule {}
