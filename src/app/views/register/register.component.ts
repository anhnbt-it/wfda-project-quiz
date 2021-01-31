import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/User';
import {UserService} from '../../containers/service/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Init default value
  myForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    age: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    image: new FormControl(''),
    dob: new FormControl('')
  });

  list?: any[];
  user?: User;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = new User();
    console.log(this.user.roles);
    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]*[0-9]*$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required, Validators.min(15), Validators.max(55)]],
      address: [''],
      email: ['', [Validators.required, Validators.email]],
      image: [''],
      dob: ['']
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.myForm.controls[controlName].hasError(errorName);
  }

  onSubmit(): void{
    this.user = this.myForm.value;
    // @ts-ignore
    this.user?.roles = [{name: 'user'}];
    this.save();
    // console.log(this.user?.roles);
    console.log(this.user);
  }

  save(): void{
    this.userService.createUser(this.user).subscribe(res => {
      this.user = res.data;
    });
  }

}
