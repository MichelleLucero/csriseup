import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl =
    'https://csriseup-api.herokuapp.com/auth/users/register';

  private _loginUrl = 'https://csriseup-api.herokuapp.com/auth/users/login';
  constructor(private http: HttpClient) {}

  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }
}
