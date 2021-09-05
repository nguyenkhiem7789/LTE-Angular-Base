import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ShareModule} from './share/share.module';
import {FormsModule} from '@angular/forms';
import {SignalRService} from './services/signal-r.service';
import {httpInterceptorProviders} from './share/http-interceptors';
import {CommonModule} from '@angular/common';
import {NotificationService} from './services/notification.service';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    ShareModule,
  ],
  providers: [
    httpInterceptorProviders,
    UserService,
    SignalRService,
    NotificationService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
