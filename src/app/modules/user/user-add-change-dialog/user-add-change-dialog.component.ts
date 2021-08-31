import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {ModuleBaseComponent} from '../../module-base.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../../services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-add-change-dialog',
  templateUrl: './user-add-change-dialog.component.html'
})
export class UserAddChangeDialogComponent extends ModuleBaseComponent implements OnInit, AfterViewInit {

  user = {
    id: this.data?.id ?? '',
    fullName: this.data?.fullName ?? '',
    email: this.data?.email ?? '',
    password: this.data?.password ?? '',
    status: this.data?.status ?? 1
  };
  isSubmit = false;
  isChange;
  StatusType = {
    Deleted: 0,
    Active: 1,
    InActive: 2
  };

  constructor(
    dialog: MatDialog,
    snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: UserService,
    private dialogRef: MatDialogRef<UserAddChangeDialogComponent>
  ) {
    super(dialog, snackBar);
  }

  ngOnInit(): void {
    this.isChange = this.data?.fullName.length > 0;
  }

  ngAfterViewInit(): void {
    this.getDataInitChange();
  }

  validateFullName(): boolean {
    return this.user.fullName.length > 0;
  }

  validatePassword(): boolean {
    return this.user.password.length > 0;
  }

  getDataInitChange(): void {
    if (!this.isChange) {
      return;
    }
    const request = {
      id: this.user.id
    };
    this.action(this.service.getById(request), function(response) {
      console.log(response);
      const user = response.models;
      if (user != null) {
        this.user.fullName = user.fullName;
        this.user.email = user.email;
        this.user.status = +user.status;
      }
    }.bind(this));
  }

  addOrChangeUser(): void {
    this.isSubmit = true;
    if (!this.validateFullName()) {
      return;
    }
    if (!this.isChange && !this.validatePassword()) {
      return;
    }
    this.isSubmit = false;
    const request = {
      id: this.user.id,
      fullName: this.user.fullName,
      email: this.user.email,
      password: this.user.password,
      status: +this.user.status
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
    this.dialogRef.close(false);
  }
}
