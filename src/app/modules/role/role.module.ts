import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import {RouterModule} from '@angular/router';
import {EmojiMartComponent} from '../emoji-mart/emoji-mart.component';



@NgModule({
  declarations: [
    RoleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RoleComponent,
      },
    ]),
  ]
})
export class RoleModule { }
