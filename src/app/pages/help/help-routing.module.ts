import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpPage } from './help.page';

const routes: Routes = [
  {
    path: '',
    component: HelpPage,
    children: [
      {
      path: 'home/help/questions',
      loadChildren: () =>
      import('../../pages/questions/questions.module').then(
      m => m.QuestionsPageModule
      )
      },
      {
      path: 'home/help/contact',
      loadChildren: () =>
      import('../../pages/contact/contact.module').then(m => m.ContactPageModule)
      },
      {
        path: 'home/help/terms',
        loadChildren: () =>
        import('../../pages/terms/terms.module').then(m => m.TermsPageModule)
      },
      {
        path: 'home/help/qualification',
        loadChildren: () =>
        import('../../pages/qualification/qualification.module').then(m => m.QualificationPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpPageRoutingModule {}
