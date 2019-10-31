import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;
  defUsers: User[] = [
    {
      id: "1",
      name: "Suresh",
      email: "suresh@domain.com"
    },
    {
      id: "2",
      name: "Ramesh",
      email: "ramesh@domain.com"
    }
  ];
  constructor(private http: HttpClient) {
    //this.usersUrl = 'http://localhost:8080/users';
    this.usersUrl = 'https://8080-b2a3aa64-8f85-4105-a6c0-4cbcded98460.ws-ap0.gitpod.io/users';
  }
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
}
