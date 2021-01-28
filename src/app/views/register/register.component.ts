import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      image: ['', Validators.required],
      dob: ['', Validators.required],
    });
  }

  onSubmit(): void{
    console.log(this.myForm.value);
  }

}
