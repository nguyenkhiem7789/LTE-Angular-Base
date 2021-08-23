import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Observable, of, Subscription} from 'rxjs';
import {catchError, finalize, tap} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class ModuleBaseComponent implements OnInit, OnDestroy {

  protected unsubscribe: Subscription[] = [];
  public isLoading = false;

  constructor(
    protected dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }

  public action(func: Observable<any>, processResultFunc: any,
                isCheckLoading = true,
                isOpenLogin = true,
                processFailFunc = null,
                isReload = false, isReturnResponse = false) {
    if (isCheckLoading) {

    }
    const request = func.pipe(
      tap(response => {
        if (response.status) {
          if (isReturnResponse) {
            processResultFunc(response);
          } else {
            processResultFunc(response.data);
          }
        } else {
          if (response.errorCode === 401) {
            if (isOpenLogin) {
              console.log('You need login');
            }
          } else {
            console.log(response.message);
            if (processFailFunc != null) {
              processFailFunc(response);
            }
          }
        }
      }),
      catchError((err, caught) => {
        console.log(err.message);
        if (err.error === 'OtpCMSVerify') {
          console.log('Open otp verify dialog');
        } else {
        }
        return of('no more request!');
      }),
      finalize(() => {
      })
    ).subscribe(res => {
    });
    this.unsubscribe.push(request);
  }

  // showActionNotification(
  //   _message: string,
  //   _type: MessageType.Create,
  //   _duration: number = 10000,
  //   _showCloseButton: boolean = true,
  //   _showUndoButton: boolean = false,
  //   _undoButtonDuration: number = 3000,
  //   _verticalPosition: 'top' | 'bottom' = 'bottom'
  // ) {
  //   const _data = {
  //     message: _message,
  //     snackBar: this.snackBar,
  //     showCloseButton: _showCloseButton,
  //     showUndoButton: _showUndoButton,
  //     undoButtonDuration: _undoButtonDuration,
  //     verticalPosition: _verticalPosition,
  //     type: _type,
  //     action: 'Undo'
  //   };
  //   return this.snackBar.openFromComponent(Ac)
  // }

  validateFormatEmail(email): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}

export enum MessageType {
  Create ,
  Read,
  Update,
  Delete
}
