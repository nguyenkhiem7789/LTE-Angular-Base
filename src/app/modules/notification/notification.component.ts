import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ModuleBaseComponent} from '../module-base.component';
import {NotificationAddChangeDialogComponent} from './notification-add-change-dialog/notification-add-change-dialog.component';
import {NotificationService} from '../../services/notification.service';
import {AlertDialogComponent} from '../../share/alert-dialog/alert-dialog.component';
import {NotificationSendDialogComponent} from './notification-send-dialog/notification-send-dialog.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent extends ModuleBaseComponent implements OnInit, AfterViewInit {

  keyword;
  status = 1;
  notifications = [];
  pageIndex = 1;
  pageSize = 20;
  totalRow = 100;
  isLoading = true;
  StatusType = {
    Deleted: 0,
    Active: 1,
    InActive: 2
  };

  constructor(
    private service: NotificationService,
    dialog: MatDialog,
    snackBar: MatSnackBar) {
      super(dialog, snackBar);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getListNotification();
  }

  search(): void {
    this.pageIndex = 0;
    this.getListNotification();
  }

  getListNotification(): void {
    const request = {
      keyword: this.keyword,
      status: +this.status,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize
    };
    this.action(this.service.get(request), function(response) {
      console.log(response);
      this.totalRow = response.totalRow;
      this.notifications = response.models;
    }.bind(this));
  }

  create(): void {
    this.openAddOrChangeDialog();
  }

  openAddOrChangeDialog(notification = null): void {
    const dialogRef = this.dialog.open(NotificationAddChangeDialogComponent, {
      panelClass: 'my-full-screen-dialog',
      width: '50%',
      disableClose: true,
      data: {
        ...notification
      },
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res) {
        this.getListNotification();
      }
    });
  }

  getStatus(notification): string {
    if (notification.status === 0) { return '<span class="label label-lg label-inline label-light-danger">Delete</span>'; }
    else if (notification.status === 1) { return '<span class="label label-lg label-inline label-light-success">Active</span>'; }
    else if (notification.status === 2) { return '<span class="label label-lg label-inline label-light-primary">InActive</span>'; }
  }

  edit(notification): void {
    this.openAddOrChangeDialog(notification);
  }

  delete(notification): void {
    this.openDeleteDialog(notification);
  }

  send(notification): void {
    this.openSendDialog(notification);
  }

  openSendDialog(notification = null): void {
    console.log(notification);
    const dialogRef = this.dialog.open(NotificationSendDialogComponent, {
      panelClass: 'my-full-screen-dialog',
      width: '30%',
      disableClose: true,
      data: {
        ...notification
      },
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      if (data) {
        this.deleteNotitication(data);
      }
    });
  }

  openDeleteDialog(notification = null): void {
    console.log(notification);
    const models = {
      model: notification,
      message : 'Do you want delete user ' + notification.title + '?',
    };
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      panelClass: 'my-full-screen-dialog',
      width: '30%',
      disableClose: true,
      data: {
        ...models
      },
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      if (data) {
        this.deleteNotitication(data);
      }
    });
  }

  deleteNotitication(notification): void {
    const request = {
      id: notification.id,
      title: notification.title,
      content: notification.content,
      status: this.StatusType.Deleted
    };
    this.action(this.service.change(request), function(response) {
      console.log(response);
      this.getListNotification();
      this.dialogRef.close(true);
    }.bind(this));
  }

  onPageChange(page): void {
    this.pageIndex = page;
    this.getListNotification();
  }
}
