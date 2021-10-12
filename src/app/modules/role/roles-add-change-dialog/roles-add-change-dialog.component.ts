import {Component, Inject, OnInit} from '@angular/core';
import {NotificationService} from '../../../services/notification.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ModuleBaseComponent} from '../../module-base.component';

@Component({
  selector: 'app-roles-add-change-dialog',
  templateUrl: './roles-add-change-dialog.component.html'
})
export class RolesAddChangeDialogComponent extends ModuleBaseComponent implements OnInit {

  role = {
    id: this.data?.id ?? '',
    name: this.data?.name ?? '',
    status: this.data?.status ?? 1
  };
  isSubmit = false;
  isChange;

  constructor(
    private service: NotificationService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<RolesAddChangeDialogComponent>
  ) {
    super(dialog, snackBar);
  }

  ngOnInit(): void {
  }

  validateName(): boolean {
    return true;
  }

  addOrChangeRole(): void {
  }

  close(): void {
  }
}
