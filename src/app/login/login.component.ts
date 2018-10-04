import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
 

  constructor(private service: AuthService,private router:Router) { }

  ngOnInit() {
  }
  get email() {
    return this.form.controls.email;
  }

  get password() {
    return this.form.controls.password;
  }

  onSubmit() {
    const result = this.service.login(this.email.value, this.password.value);
    if (result) {
      this.router.navigate(['']);
      location.reload();
    } else {
      this.form.setErrors({
        invalidLogin: true
      });
    }
  }

}

