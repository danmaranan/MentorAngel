import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.router.navigate(['main']);
      return;
    }

    if(this.loginForm.controls.email.value == 'dan' && this.loginForm.controls.password.value == 'dan') {
        this.router.navigate(['main']);
    }else {
      this.invalidLogin = true;
      this.router.navigate(['main']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
