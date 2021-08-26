import { Component, OnInit } from '@angular/core';
import {ModuleBaseComponent} from '../module-base.component';
import {UserService} from '../../services/user.service';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SignalrService} from '../../services/signalr.service';

@Component({
  selector: 'app-signal-r',
  templateUrl: './signal-r.component.html'
})
export class SignalRComponent extends ModuleBaseComponent implements OnInit {

  message = '';

  constructor(
    private service: UserService,
    private signalService: SignalrService,
    dialog: MatDialog,
    snackBar: MatSnackBar
  ) {
    super(dialog, snackBar);
  }

  ngOnInit(): void {
    this.signalService.onProcess('Notify', (message) => {
      console.log(message);
      this.message = message;
    });
  }

  send(event: Event): void {
    event.preventDefault();
    const request = {
      message: ''
    };
    this.action(this.signalService.sendMessage(request), function(response) {
      console.log(response);
    }.bind(this));
  }

}
