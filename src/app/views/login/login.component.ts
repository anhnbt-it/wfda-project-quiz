import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {UserService} from '../../containers/service/user/user.service';
import {LocalStorageService} from "../../containers/service/localStorage.service";

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
              private userService: UserService,
              private localStorage: LocalStorageService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.userService.login(this.user).subscribe(res => {
      this.localStorage.set('user', res.accessToken);
      console.log(res);
      this.gotoHome();
    });
  }

  gotoHome(): void{
    this.router.navigate(['/home']);
  }

}
