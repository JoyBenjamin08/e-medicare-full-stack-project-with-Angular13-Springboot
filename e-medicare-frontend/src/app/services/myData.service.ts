import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationStatus } from '../models/authenticationStatus.model';
import { myData } from '../models/myData.model';
@Injectable({
  providedIn: 'root',
})
export class myDataService {
  constructor(private httpClient: HttpClient) {}

  insertUserData(data: myData): Observable<any> {
    console.log(data);
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    });
    return this.httpClient.post<myData>(
      'http://localhost:8880/api/users',
      data,
      {
        headers: headers,
      }
    );
  }

  authenticate(
    email: string,
    password: string
  ): Observable<AuthenticationStatus> {
    console.log(email, password);
    let body = {
      email: email,
      password: password,
    };
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    });
    return this.httpClient.post<AuthenticationStatus>(
      'http://localhost:10000/api/user',
      body,
      {
        headers: headers,
      }
    );
  }
}
