import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}
  getComments(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.baseUrl}/Contact`);
    }
}
