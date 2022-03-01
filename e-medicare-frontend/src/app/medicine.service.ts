import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpClientModule}   from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private baseUrl = 'http://localhost:8088/api/v4';
  createMedicine: any;

  constructor(private http: HttpClient) { }
  getMedicines(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/Medicines');
  }
  getMedicine(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/Medicine/${id}`);
  }

  createMedicines(Medicine: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+'/Medicine', Medicine)
  }

  updateMedicines(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/Medicine/${id}`, value);
  }

  deleteMedicines(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Medicine/${id}`, { responseType: 'text' });
  }

}
