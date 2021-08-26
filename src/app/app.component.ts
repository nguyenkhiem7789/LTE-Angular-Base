import {Component, OnInit} from '@angular/core';
import {ModuleBaseComponent} from './modules/module-base.component';
import {UserService} from './services/user.service';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SignalrService} from './services/signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends ModuleBaseComponent implements OnInit {
  title = 'lte-example';

  constructor(
    private service: UserService,
    private signalService: SignalrService,
    dialog: MatDialog,
    snackBar: MatSnackBar
  ) {
    super(dialog, snackBar);
  }

  ngOnInit(): void {
    this.signalService.onInit();
  }
}
