import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {RouterModule} from '@angular/router';
import { UserAddChangeDialogComponent } from './user-add-change-dialog/user-add-change-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UserComponent,
    UserAddChangeDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserComponent,
      },
    ]),
    MatDialogModule,
    FormsModule,
  ]
})
export class UserModule { }
