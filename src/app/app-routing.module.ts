import { NgModule } from '@angular/core';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
path: '',
loadChildren: () =>
import('./index/index.module').then(m => m.IndexPageModule)
},
{
path: '',
loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
},
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home/help/questions',
    loadChildren: () => import('./pages/questions/questions.module').then( m => m.QuestionsPageModule)
  },
  {
    path: 'home/help/contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'home/help/terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'home/help/qualification',
    loadChildren: () => import('./pages/qualification/qualification.module').then( m => m.QualificationPageModule)
  },
  {
    path: 'home/exercises/adelgazar',
    loadChildren: () => import('./pages/adelgazar/adelgazar.module').then( m => m.AdelgazarPageModule)
  },
  {
    path: 'home/exercises/aumentar',
    loadChildren: () => import('./pages/aumentar/aumentar.module').then( m => m.AumentarPageModule)
  },
  


];
@NgModule({
imports: [
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
],
exports: [RouterModule]
})
export class AppRoutingModule {}