import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModuleBaseComponent} from './modules/module-base.component';
import {UserService} from './services/user.service';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SignalRService} from './services/signal-r.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends ModuleBaseComponent implements OnInit, OnDestroy {
  title = 'lte-example';

  constructor(
    private service: UserService,
    private signalRService: SignalRService,
    dialog: MatDialog,
    snackBar: MatSnackBar
  ) {
    super(dialog, snackBar);
  }

  ngOnInit(): void {
    this.signalRService.onInit();
  }

  async ngOnDestroy() {
    await this.signalRService.disconnect();
  }
}
