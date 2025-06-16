import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users?page=1';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UsersResponse> {
    const headers = new HttpHeaders({
      'X-API-Key': 'reqres-free-v1'
    });

    return this.http.get<UsersResponse>(this.apiUrl, { headers });
  }
}