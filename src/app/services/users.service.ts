import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string,
      lng: string
    }
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string
  };
}

@Injectable()
export class UsersService {
  constructor(
    private http: HttpClient
  ) {}
  getUsers(): Observable <User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
