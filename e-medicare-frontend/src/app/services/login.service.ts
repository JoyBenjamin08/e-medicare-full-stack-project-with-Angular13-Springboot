import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationStatus } from "../models/AthenticationStatus.model";

@Injectable({
    providedIn: 'root',
})
export class LoginService{
    
    constructor(private httpClient: HttpClient){}
    authenticated(
        username: String,
        password: string
    ): Observable<AuthenticationStatus>{
        console.log(username, password);
        let body={
            username: username,
            password: password,
        };
        let headers = new HttpHeaders({
            'content-type': 'application/json',
        });
        return this.httpClient.post<AuthenticationStatus>(
            'http://localhost:8088/api/v4/user',
            body,
            {
                headers: headers,
            }
        );
    }
}