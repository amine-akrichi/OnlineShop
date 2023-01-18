import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eshop';
  constructor(protected _authService: AuthService, protected router: Router){}

  logOut(){
    sessionStorage.clear()
    location.reload();
  }
}