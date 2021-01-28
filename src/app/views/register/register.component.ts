import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
  email: '',
  password: ''
};
  repassword: '';
  list: any[];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.list = [];
  }

  register(): void{
    if (this.user.password === this.repassword) {
      this.list.push(this.user);
      console.log(this.list);
      for (let u of this.list){
        console.log(u);
      }
      this.router.navigate([''],this.user);
    }
  }

}
