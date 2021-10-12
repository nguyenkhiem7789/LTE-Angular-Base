import { Component, OnInit } from '@angular/core';
import {ModuleBaseComponent} from '../module-base.component';
import {NotificationService} from '../../services/notification.service';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NotificationAddChangeDialogComponent} from '../notification/notification-add-change-dialog/notification-add-change-dialog.component';
import {RolesAddChangeDialogComponent} from './roles-add-change-dialog/roles-add-change-dialog.component';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent  extends ModuleBaseComponent implements OnInit {

  keyword = '';
  status = 1;
  users = [];
  StatusType = {
    Deleted: 0,
    Active: 1,
    InActive: 2
  };
  pageIndex = 0;
  pageSize = 20;
  totalRow = 20;

  constructor(
    dialog: MatDialog,
    snackBar: MatSnackBar) {
    super(dialog, snackBar);
  }

  ngOnInit(): void {
  }

  search(): void {
  }

  getListRole(): void {
  }

  create(): void {
    this.openAddOrChangeDialog();
  }

  openAddOrChangeDialog(role = null): void {
    const dialogRef = this.dialog.open(RolesAddChangeDialogComponent, {
      panelClass: 'my-full-screen-dialog',
      width: '50%',
      disableClose: true,
      data: {
        ...role
      },
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res) {
        this.getListRole();
      }
    });
  }

  getStatus(): void {
  }

  edit(): void {
  }

  delete(): void {
  }

  onPageChange(): void {
  }

}
