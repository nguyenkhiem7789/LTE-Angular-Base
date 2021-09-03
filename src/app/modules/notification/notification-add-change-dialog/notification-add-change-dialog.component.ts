import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserService} from '../../../services/user.service';
import {ModuleBaseComponent} from '../../module-base.component';
import {NotificationService} from '../../../services/notification.service';

@Component({
  selector: 'app-notification-add-change-dialog',
  templateUrl: './notification-add-change-dialog.component.html'
})
export class NotificationAddChangeDialogComponent extends ModuleBaseComponent implements OnInit {

  notification = {
    title: '',
    content: ''
  };
  isSubmit = false;

  constructor(
    private service: NotificationService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<NotificationAddChangeDialogComponent>
  ) {
    super(dialog, snackBar);
  }

  ngOnInit(): void {
  }

  validateTitle(): boolean {
    return this.notification.title.length > 0;
  }

  validateContent(): boolean {
    return this.notification.content.length > 0;
  }

  addOrChangeNotification(): void {

  }

  close(): void {

  }
}
