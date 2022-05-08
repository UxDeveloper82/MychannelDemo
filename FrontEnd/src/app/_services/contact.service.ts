import { Contact } from '../_models/contact';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseUrl ='https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getMessages() {
    return this.http.get<Contact[]>(this.baseUrl + 'contacts');
  }

  sendMessage(model:any) {
    return this.http.post(this.baseUrl +'contacts', model);
  }
}
