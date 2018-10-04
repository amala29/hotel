import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reserveForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    guest: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit() {
  }
  get username() {
    return this.reserveForm.controls.username;
  }
  get email() {
    return this.reserveForm.controls.email;
  }

  get phone() {
    return this.reserveForm.controls.phone;
  }
  get time() {
    return this.reserveForm.controls.time;
  }
  get date() {
    return this.reserveForm.controls.date;
  }
  get guest() {
    return this.reserveForm.controls.guest;
  }



  onSubmit() {

    console.log(this.reserveForm.controls);

  }
}
