
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
      path: 'info',
      loadChildren: () =>
      import('../pages/info/info.module').then(m => m.InfoPageModule)
      },
      {
      path: 'calendar',
      loadChildren: () =>
      import('../pages/calendar/calendar.module').then(
      m => m.CalendarPageModule
      )
      },
      {
      path: 'exercises',
      loadChildren: () =>
      import('../pages/exercises/exercises.module').then(
      m => m.ExercisesPageModule
      )
      },
      {
      path: 'maps',
      loadChildren: () =>
      import('../pages/maps/maps.module').then(
      m => m.MapsPageModule
      )
      },
      {
        path: 'help',
        loadChildren: () =>
        import('../pages/help/help.module').then(
        m => m.HelpPageModule
        )
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
