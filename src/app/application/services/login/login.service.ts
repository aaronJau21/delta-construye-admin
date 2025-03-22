import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ILoginResponse, LoginDto } from '../../../core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly http = inject(HttpClient);
  private readonly api = environment.API_URL;

  login(data: LoginDto): Observable<ILoginResponse> {
    const url = `${this.api}/auth/loginUser`;
    return this.http.post<ILoginResponse>(url, data);
  }

  saveToken(data: ILoginResponse): void {
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('user', JSON.stringify(data.user));
  }
}
