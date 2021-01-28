import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {
    email: '',
    password: ''
  };
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
    this.user = this.router.getCurrentNavigation()?.extras.state;
    this.list.push(this.user);
    console.log(this.list);

  }

  login(): void {
    console.log('asdfgh');
    for (let u of this.list) {
      if (this.user.email === u.email && this.user.password === u.password) {
        this.router.navigate(['/main/dashboard']);
        return;
      } else {
        alert('tach');
        return;
      }
    }
  }

  register(): void{
    // @ts-ignore
    this.router.navigate(['/register']);
  }
}
