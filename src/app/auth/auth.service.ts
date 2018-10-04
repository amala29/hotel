import { Injectable, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  users: User[] = [];
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<User[]>('../../assets/users.json').subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }


  login(email: string, password: string) {
      return this.http.get<User[]>('../../assets/users.json').subscribe(users => {
        for (const user of users) {
          if (email === user.email && password === user.password) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            return true;
          }
        }
        return false;
      });
  }
  signup(user: User) {
    for (const u of this.users) {
      if (u.email === user.email) {
        return false;
      }
    }
    this.users.push(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    return true;
  }
}

