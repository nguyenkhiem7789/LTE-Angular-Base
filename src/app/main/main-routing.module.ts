import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'chart',
        loadChildren: () =>
          import('.././chart/chart.module').then((m) => m.ChartModule),
      },
      {
        path: 'contactus',
        loadChildren: () =>
          import('../contactus/contactus.module').then((m) => m.ContactusModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

