import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm!: FormGroup;
  list?: any[];
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: [' ', Validators.required],
      password: [' ', Validators.required],
      age: [' ', Validators.required],
      address: [' ', Validators.required],
      email: [' ', Validators.required],
      image: [' ', Validators.required],
      dob: [' ', Validators.required],
    });
  }

  register(): void{
    console.log(this.myForm?.value);
  }

}
