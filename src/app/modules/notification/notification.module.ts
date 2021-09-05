import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationComponent} from './notification.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ShareModule} from '../../share/share.module';
import {NotificationAddChangeDialogComponent} from './notification-add-change-dialog/notification-add-change-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NotificationSendDialogComponent} from './notification-send-dialog/notification-send-dialog.component';

@NgModule({
  declarations: [
    NotificationComponent,
    NotificationAddChangeDialogComponent,
    NotificationSendDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NotificationComponent,
      },
    ]),
    FormsModule,
    ShareModule,
    MatDialogModule
  ]
})
export class NotificationModule { }
