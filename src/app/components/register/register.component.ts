import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Create an account';

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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]*[0-9]*$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required, Validators.min(15), Validators.max(55)]],
      address: [''],
      email: ['', [Validators.required, Validators.email]],
      image: [''],
      dob: [''],
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.myForm.controls[controlName].hasError(errorName);
  }

  onSubmit(): void{
    console.log(this.myForm.value);
  }

}