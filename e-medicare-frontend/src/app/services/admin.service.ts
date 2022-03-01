import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  isAdmin = new EventEmitter<string>();
}
