import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private readonly http: HttpClient) { }

  public sigin(user: Login): Observable<any>{
    return this.http.post('api/auth/login', user);
  }

}
