import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '../models/login-input.interface';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl: string = 'https://projectapi.gerasim.in/api/EmployeeManagement/login';
  private httpClient: HttpClient = inject(HttpClient);

  login(loginData: LoginData): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(this.apiUrl, loginData);
  }
}
