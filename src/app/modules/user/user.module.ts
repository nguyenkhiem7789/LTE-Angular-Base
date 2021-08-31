import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {RouterModule} from '@angular/router';
import { UserAddChangeDialogComponent } from './user-add-change-dialog/user-add-change-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ShareModule} from '../../share/share.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    MatSnackBarModule,
    FormsModule,
    ShareModule,
    NgbModule
  ]
})
export class UserModule { }
