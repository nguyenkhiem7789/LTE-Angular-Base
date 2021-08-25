import {Component, Inject, OnInit, Output, EventEmitter} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ModuleBaseComponent} from '../../modules/module-base.component';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html'
})
export class AlertDialogComponent extends ModuleBaseComponent implements OnInit {

  title = '';
  message = '';

  constructor(
    dialog: MatDialog,
    snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AlertDialogComponent>
  ) {
    super(dialog, snackBar);
  }

  ngOnInit(): void {
    this.message = this.data.message;
  }

  ok(): void {
    this.dialogRef.close(this.data.model);
  }

  close(): void {
    this.dialogRef.close();
  }

}
