import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  successMessage: string;

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.errorMessage = "";
  }

  login() {
    if (this.loginForm.get('username').value !== 'student'
      && this.loginForm.get('username').value !== 'professor')
    {
      this.errorMessage = "Invalid Credentials. Try again."
    }
    else
    {
      console.log("Logged in.");
      this.router.navigate(["/mainHub/" + this.loginForm.get('username').value]);
    }
  }
}
