import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl: string = 'https://localhost:5001/api/members';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<User[]>(this.baseUrl);
  }
}
