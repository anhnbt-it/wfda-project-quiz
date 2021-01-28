import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email?: string;
    password?: string;
list = [
  {
    email: 'a',
    password: '1'
  },
  {
    email: 's',
    password: '1'
  }
];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.email =  '';
    this.password = '';
    console.log(this.list);

  }

  login(): void {
    console.log('asdfgh');
    for (let u of this.list) {
      if (this.email === u.email && this.password === u.password) {
        this.router.navigate(['/main/dashboard']);
        return;
      } else {
        alert('tach');
        return;
      }
    }
  }

}
