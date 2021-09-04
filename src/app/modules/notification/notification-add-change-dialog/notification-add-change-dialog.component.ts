import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ModuleBaseComponent} from '../../module-base.component';
import {NotificationService} from '../../../services/notification.service';

@Component({
  selector: 'app-notification-add-change-dialog',
  templateUrl: './notification-add-change-dialog.component.html'
})
export class NotificationAddChangeDialogComponent extends ModuleBaseComponent implements OnInit {

  notification = {
    id: '',
    title: '',
    content: ''
  };
  isSubmit = false;
  isChange;

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
    this.isChange = this.data?.title.length > 0;
  }

  validateTitle(): boolean {
    return this.notification.title.length > 0;
  }

  validateContent(): boolean {
    return this.notification.content.length > 0;
  }

  addOrChangeNotification(): void {
    this.isSubmit = true;
    if (!this.validateTitle()) {
      return;
    }
    if (!this.validateContent()) {
      return;
    }
    this.isSubmit = false;
    const request = {
      id: this.notification.id,
      title: this.notification.title,
      content: this.notification.content
    };
    if (!this.isChange) {
      this.action(this.service.add(request), function(response) {
        console.log(response);
        this.dialogRef.close(true);
      }.bind(this));
    } else {
      this.action(this.service.change(request), function(response) {
        console.log(response);
        this.dialogRef.close(true);
      }.bind(this));
    }
  }

  close(): void {

  }
}
