import {Injectable} from '@angular/core';
import {HubConnection, HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  private connection: HubConnection;

  constructor(private http: HttpClient) { }

  onInit(): void {
    this.connection = new HubConnectionBuilder()
      .withUrl('https://localhost:44393/signalr')
      .configureLogging(LogLevel.Information)
      .build();
    this.connection.start().then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection'));
    this.connection.on('OnConnectSuccess', (message) => {
      console.log(message);
    });
  }

  public onProcess(key, func): void {
    this.connection.on(key, (message) => {
      console.log(message);
      func(message);
    });
  }

  sendMessage(request): Observable<any> {
    return this.http.post('https://localhost:44393/Notification/Test', request);
  }

}
