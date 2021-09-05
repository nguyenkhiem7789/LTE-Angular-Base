import {Injectable} from '@angular/core';
import {HubConnection, HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

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

  public getConnectionId(): string {
    return this.connection.connectionId;
  }

  public async disconnect() {
    await this.connection.stop();
  }

  sendMessage(request): Observable<any> {
    return this.http.post('/Notification/Test', request);
  }

}
