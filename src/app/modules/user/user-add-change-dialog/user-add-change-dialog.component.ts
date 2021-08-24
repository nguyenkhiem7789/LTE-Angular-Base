import {Component, Inject, OnInit} from '@angular/core';
import {ModuleBaseComponent} from '../../module-base.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../../services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-add-change-dialog',
  templateUrl: './user-add-change-dialog.component.html'
})
export class UserAddChangeDialogComponent extends ModuleBaseComponent implements OnInit {

  user = {
    id: this.data?.id ?? '',
    fullName: this.data?.fullName ?? '',
    email: this.data?.email ?? '',
    password: this.data?.password ?? ''
  };
  isSubmit = false;
  isChange;

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

  validateFullName(): boolean {
    return this.user.fullName.length > 0;
  }

  validatePassword(): boolean {
    return this.user.password.length > 0;
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
      password: this.user.password
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
