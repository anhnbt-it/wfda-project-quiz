import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email?: string;
password?: number;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.email = '';
    this.password = 0;
  }

  login(): void {
    console.log('asdfgh');
    // tslint:disable-next-line:triple-equals
    if (this.email == 'user' && this.password == 123){
      this.router.navigate(['/main/dashboard']);
    }else {
      alert('tach');
    }
  }

  register(): void{
    this.router.navigate(['/register']);
  }
}
