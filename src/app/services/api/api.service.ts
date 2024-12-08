import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'express';
import { Url } from 'url';
import { environment } from '../../../environments/environment';
import { SendConfirmationCodeRequest } from '../../models/authentication/confirmation.message.model';
import { Observable } from 'rxjs';
import { ResetPasswordRequest } from '../../models/authentication/reset.password.model';
import { ChangePasswordRequest } from '../../models/authentication/change.password.model';
import { LoginRequest, LoginResponse } from '../../models/authentication/login.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(loginDto: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, loginDto);
  }
  
  sendConfirmationCode(sendConfirmationCode: SendConfirmationCodeRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/send-confirmation-code-for-check-email`, sendConfirmationCode);
  }

  sendResetConfirmationCode(sendConfirmationCode: SendConfirmationCodeRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/send-confirmation-code-for-reset-password`, sendConfirmationCode);
  }

  resetPassword(resetPasswordDto: ResetPasswordRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/reset-password`, resetPasswordDto);
  }

  changePassword(changePasswordDto: ChangePasswordRequest): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/change-password`, changePasswordDto);
  }

}
