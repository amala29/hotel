import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
    
  })
  
  constructor() { }

  ngOnInit() {
  }
  get name() {
    return this.form.controls.name;
  }
  get email() {
    return this.form.controls.email;
  }

  get phone() {
    return this.form.controls.phone;
  }
  get message() {
    return this.form.controls.message;
  }
  OnSubmit() {

    console.log(this.form.controls);

  }
}
