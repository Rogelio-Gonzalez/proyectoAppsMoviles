import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AumentarPage } from './aumentar.page';

const routes: Routes = [
  {
    path: '',
    component: AumentarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AumentarPageRoutingModule {}
