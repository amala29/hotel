import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { User } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required)
  });

  constructor(private service: AuthService,private router:Router) { }

  ngOnInit() {
  }
  get name() {
    return this.form.controls.name;
  }
  get email() {
    return this.form.controls.email;
  }

  get password() {
    return this.form.controls.password;
  }
  get address() {
    return this.form.controls.address;
  }
  get phoneNumber() {
    return this.form.controls.phoneNumber;
  }

  onSubmit() {
    const user = new User(new Date().getMilliseconds().toString(), this.name.value, this.email.value, this.password.value);
    const result = this.service.signup(user);
    if (result) {
      this.router.navigate(['']);
      location.reload();
    } else {
      this.form.setErrors({
        invalidSignup: true
      });
    }
  }


}
