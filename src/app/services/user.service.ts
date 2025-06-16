import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users?page=2';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(this.apiUrl);
  }
}