import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpClientModule}   from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VieworderService {

  private baseUrl = 'http://localhost:8088/api/v4';
  constructor(private http: HttpClient) { }
  getVieworders(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/orders');
  }
  getVieworder(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/order/${id}`);
  }

  createVieworders(order: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+'/order', order)
  }

  updateVieworders(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/order/${id}`, value);
  }

  deleteVieworders(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/order/${id}`, { responseType: 'text' });
  }

}
