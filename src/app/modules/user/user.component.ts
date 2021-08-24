import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserAddChangeDialogComponent} from './user-add-change-dialog/user-add-change-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ModuleBaseComponent} from '../module-base.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent extends ModuleBaseComponent implements OnInit, AfterViewInit {

  users = [];

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

  create(event: Event): void {
    event.preventDefault();
    this.openAddOrChangeDialog();
  }

  edit(event: Event, user): void {
    event.preventDefault();
    this.openAddOrChangeDialog(user);
  }

  delete(event: Event): void {
    event.preventDefault();
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

}
