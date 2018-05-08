import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {  FormBuilder, FormControl, FormGroup, Validators  } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AuthGuard } from '../gaurds/auth.guard';

import { AuthService } from '../services/auth.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[]
})
export class LoginComponent implements OnInit {
  
  previousUrl;
  messageClass;
  message;
  loginForm: FormGroup;
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  constructor(private auth: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              public toast: ToastComponent,
              public authGuard: AuthGuard) { }

  // ngOnInit() {
  //   if (this.auth.loggedIn) {
  //     this.router.navigate(['/']);
  //   }
  //   this.loginForm = this.formBuilder.group({
  //     email: this.email,
  //     password: this.password
  //   });
  // }

  ngOnInit() {
    // if (this.auth.loggedIn) {
    //   this.router.navigate(['/']);
    // }
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });

    if (this.authGuard.redirectUrl) {

      this.messageClass = 'alert alert-danger'; // Set error message: need to login

      this.message = 'You must be logged in to view that page.'; // Set message

      this.previousUrl = this.authGuard.redirectUrl; // Set the previous URL user was redirected from

      this.authGuard.redirectUrl = undefined; // Erase previous URL

    }
  }

  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }

  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

  // login() {
  //   this.auth.login(this.loginForm.value).subscribe(
  //     res => this.router.navigate(['/']),
  //     error => this.toast.setMessage('invalid email or password!', 'danger')
  //   );
  // }

  login() {
    this.auth.login(this.loginForm.value).subscribe(
      // res => this.router.navigate(['/']),
      res => {
        // console.log(res);
        if (this.previousUrl) {
          this.router.navigate([this.previousUrl]); // Redirect to page they were trying to view before
        } else {
        this.router.navigate(['/']); 
        }  // Navigate to dashboard view
      },
      error => this.toast.setMessage('invalid email or password!', 'danger')
    );
  }

}
   