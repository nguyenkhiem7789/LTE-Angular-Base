import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ModuleBaseComponent} from '../module-base.component';
import {UserAddChangeDialogComponent} from '../user/user-add-change-dialog/user-add-change-dialog.component';
import {NotificationAddChangeDialogComponent} from './notification-add-change-dialog/notification-add-change-dialog.component';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent extends ModuleBaseComponent implements OnInit {

  keyword;
  status;
  notifications = [];
  pageIndex = 1;
  pageSize = 20;
  totalRow = 100;
  isLoading = true;

  constructor(
    private service: NotificationService,
    dialog: MatDialog,
    snackBar: MatSnackBar) {
      super(dialog, snackBar);
  }

  ngOnInit(): void {
  }

  search(): void {

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
      }
    });
  }

  getStatus(notification): string {
    return '';
  }

  edit(notification): void {

  }

  delete(notification): void {

  }

  onPageChange(): void {

  }
}
