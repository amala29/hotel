import { Injectable, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  url='https://hotel-app1.herokuapp.com/api';

  //url='http://localhost:8080/api';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }


  login(email: string, password: string) {
    return this.http.post<User>(this.url + '/login?email=' + email + '&password=' + password, {});
  }
  
    
  signup(user: User) {
    return this.http.post<User>(this.url + '/signup', user);
  }
}

