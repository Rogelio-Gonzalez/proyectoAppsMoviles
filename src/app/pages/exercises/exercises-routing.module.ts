import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercisesPage } from './exercises.page';

const routes: Routes = [
  {
    path: '',
    component: ExercisesPage,
    children: [
      {
      path: 'home/exercises/adelgazar',
      loadChildren: () =>
      import('../../pages/adelgazar/adelgazar.module').then(
      m => m.AdelgazarPageModule
      )
      },
      {
      path: 'home/exercises/aumentar',
      loadChildren: () =>
      import('../../pages/aumentar/aumentar.module').then(m => m.AumentarPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercisesPageRoutingModule {}
