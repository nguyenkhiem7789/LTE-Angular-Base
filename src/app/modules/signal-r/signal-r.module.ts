import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalRComponent } from './signal-r.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    SignalRComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignalRComponent,
      },
    ]),
    FormsModule,
  ]
})
export class SignalRModule { }
