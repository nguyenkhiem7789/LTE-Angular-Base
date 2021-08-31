import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MainComponent} from '../../main/main.component';
import {ModuleBaseComponent} from '../../modules/module-base.component';
import {UserService} from '../../services/user.service';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends ModuleBaseComponent implements OnInit, AfterViewInit {

  user = {
    userName: '',
    password: ''
  };

  constructor(
    private service: UserService,
    private router: Router,
    dialog: MatDialog,
    snackBar: MatSnackBar
  ) {
    super(dialog, snackBar);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  onLogin(): void {
    const request = {
      Username : this.user.userName,
      Password : this.user.password
    };
    this.action(this.service.login(request), function(response) {
      console.log(response);
      this.router.navigateByUrl('/main').then();
    }.bind(this));
  }

}
