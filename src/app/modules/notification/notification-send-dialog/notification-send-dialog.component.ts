import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {NotificationService} from '../../../services/notification.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserService} from '../../../services/user.service';
import {ModuleBaseComponent} from '../../module-base.component';
import {SignalRService} from '../../../services/signal-r.service';

@Component({
  selector: 'app-notification-send-dialog',
  templateUrl: './notification-send-dialog.component.html'
})
export class NotificationSendDialogComponent extends ModuleBaseComponent implements OnInit, AfterViewInit {
  userId;
  users;
  constructor(
    private service: NotificationService,
    private userService: UserService,
    private signalRService: SignalRService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<NotificationSendDialogComponent>
  ) {
    super(dialog, snackBar);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getListUser();
  }

  send(): void {
    console.log(this.userId);
    const request = {
      conditions: [this.signalRService.getConnectionId()],
      type: 2,
      value: this.data.content
    };
    this.action(this.service.send(request), function(response) {
      console.log(response);
      this.dialogRef.close(true);
    }.bind(this));
  }

  getListUser(): void {
    this.action(this.userService.getAll(), function(response) {
      console.log(response);
      this.totalRow = response.totalRow;
      this.users = response.models;
    }.bind(this));
  }

  close(): void {
    this.dialogRef.close(true);
  }
}

