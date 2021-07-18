import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { ContatusComponent } from './contactus/contatus.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./main/main.module').then((m) => m.MainModule),
  },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

