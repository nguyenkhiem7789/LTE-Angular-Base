import { Component, OnInit } from '@angular/core';
import {ModuleBaseComponent} from '../../module-base.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../../services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-add-change-dialog',
  templateUrl: './user-add-change-dialog.component.html'
})
export class UserAddChangeDialogComponent extends ModuleBaseComponent implements OnInit {

  fullName = '';
  password = '';
  isSubmit = false;

  constructor(
    dialog: MatDialog,
    snackBar: MatSnackBar,
    private service: UserService,
    private dialogRef: MatDialogRef<UserAddChangeDialogComponent>
  ) {
    super(dialog, snackBar);
  }

  ngOnInit(): void {
  }

  validateFullName(): boolean {
    return this.fullName.length > 0;
  }

  validatePassword(): boolean {
    console.log(this.password);
    return this.password.length > 0;
  }

  addOrChangeUser(): void {
    this.isSubmit = true;
    if (!this.validateFullName()) {
      return;
    }
    if (!this.validatePassword()) {
      return;
    }
    this.isSubmit = false;
    const request = {
      fullName: this.fullName,
      password: this.password
    };
    this.action(this.service.add(request), function(response) {
      console.log(response);
      this.dialogRef.close(true);
    }.bind(this));
  }

  close(): void {
    this.dialogRef.close(false);
  }
}
