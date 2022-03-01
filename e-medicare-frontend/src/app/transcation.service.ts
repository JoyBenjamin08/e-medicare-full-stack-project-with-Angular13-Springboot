import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpClientModule}   from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TranscationService {
  private baseUrl = 'http://localhost:8088/api/v1';
  constructor(private http: HttpClient) { }
  getTransaction(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/getTransactions');
  }
  getTransDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/getAllTransactions');
  }
  updateStatus(transid:number,value:any):Observable<object>{
    return this.http.put(`${this.baseUrl}/${transid}`, value);

  }
}
