import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserAddChangeDialogComponent} from './user-add-change-dialog/user-add-change-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ModuleBaseComponent} from '../module-base.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserService} from '../../services/user.service';
import {AlertDialogComponent} from '../../share/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent extends ModuleBaseComponent implements OnInit, AfterViewInit {

  users = [];
  Status = {
    Deleted: 0,
    Active: 1,
    InActive: 2
  };

  constructor(
    private service: UserService,
    dialog: MatDialog,
    snackBar: MatSnackBar
  ) {
    super(dialog, snackBar);
  }

  ngAfterViewInit(): void {
    this.getListUser();
  }

  search(event: Event): void {
    event.preventDefault();
    this.getListUser();
  }

  getListUser(): void {
    const request = {
      keyword: ''
    };
    this.action(this.service.get(request), function(response) {
      console.log(response);
      this.users = response.models;
    }.bind(this));
  }

  deleteUser(user): void {
    const request = {
      id: user.id,
      fullName: user.fullName,
      status: this.Status.Deleted
    };
    this.action(this.service.change(request), function(response) {
      console.log(response);
      this.getListUser();
      this.dialogRef.close(true);
    }.bind(this));
  }

  create(event: Event): void {
    event.preventDefault();
    this.openAddOrChangeDialog();
  }

  edit(event: Event, user): void {
    event.preventDefault();
    this.openAddOrChangeDialog(user);
  }

  delete(event: Event, user): void {
    event.preventDefault();
    this.openDeleteDialog(user);
  }

  getStatus(user): string {
    if (user.status === 0) { return '<span class="label label-lg label-inline label-light-danger">Delete</span>'; }
    else if (user.status === 1) { return '<span class="label label-lg label-inline label-light-success">Active</span>'; }
    else if (user.status === 2) { return '<span class="label label-lg label-inline label-light-primary">InActive</span>'; }
  }

  openAddOrChangeDialog(user = null): void {
    const dialogRef = this.dialog.open(UserAddChangeDialogComponent, {
      panelClass: 'my-full-screen-dialog',
      width: '50%',
      disableClose: true,
      data: {
        ...user
      },
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res) {
        this.getListUser();
      }
    });
  }

  openDeleteDialog(user = null): void {
    console.log(user);
    const models = {
      model: user,
      message : 'Do you want delete user ' + user.fullName + '?',
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
        this.deleteUser(data);
      }
    });
  }

  ngOnInit(): void {
  }

}
