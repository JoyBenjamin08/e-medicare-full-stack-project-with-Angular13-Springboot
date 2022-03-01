import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpClientModule}   from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:8088/api/v4';

  constructor(private http: HttpClient) { }
  getCart(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/carts');
  }
  getCar(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/cart/${id}`);
  }

  createCart(cart: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+'/cart', cart);
  }

  updateCart(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/cart/${id}`, value);
  }

  deleteCart(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/cart/${id}`, { responseType: 'text' });
  }

}
