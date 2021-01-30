import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {UserService} from '../../containers/service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    password: ''
  };
  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.userService.login(this.user).subscribe(res => {
      console.log(res);
      this.gotoHome();
    });
  }

  gotoHome(): void{
    this.router.navigate(['/home']);
  }

}
