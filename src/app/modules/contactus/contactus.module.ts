import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatusComponent } from './contatus.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ContatusComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContatusComponent,
      },
    ]),
  ]
})
export class ContactusModule { }
