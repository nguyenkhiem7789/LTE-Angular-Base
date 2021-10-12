import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import {RouterModule} from '@angular/router';
import {EmojiMartComponent} from '../emoji-mart/emoji-mart.component';
import {ShareModule} from '../../share/share.module';
import {FormsModule} from '@angular/forms';
import { RolesAddChangeDialogComponent } from './roles-add-change-dialog/roles-add-change-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    RoleComponent,
    RolesAddChangeDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RoleComponent,
      },
    ]),
    ShareModule,
    FormsModule,
    MatDialogModule,
  ]
})
export class RoleModule { }
