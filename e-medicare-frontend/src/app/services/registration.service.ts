import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { users } from "../models/users.model";
@Injectable({
  providedIn:"root"
})
export class Registrationservice{
    constructor(private _http:HttpClient){}
    register(
        firstname:string,
        lastname: string,
        contact_no: number,
        address:string,
        username: String,
        password: string
    ): Observable<users>{
        console.log(firstname,lastname,contact_no,address,username, password);
        let body={
            firstname:firstname,
            lastname:lastname,
            contact_no:contact_no,
            address:address,
            username: username,
            password: password,
        };
        let headers = new HttpHeaders({
            'content-type': 'application/json',
        });
        return this._http.post<users>(
            'http://localhost:8088/api/v4/users',
            body,
            {
                headers: headers,
            }
        );

}}


