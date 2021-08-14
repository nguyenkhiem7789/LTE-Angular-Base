import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MainComponent} from '../../main/main.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
     //this.router.navigate(['/main']);
  }

  ngAfterViewInit(): void {
    //this.router.navigateByUrl('/main');
  }

  onLogin(event: Event): void {
    event.preventDefault();
    this.router.navigateByUrl('/main');
  }

}