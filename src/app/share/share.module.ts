import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AlertDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
  ]
})
export class ShareModule { }
