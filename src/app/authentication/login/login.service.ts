import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginURL: string = environment.apiUrl ;
  constructor(private http: HttpClient) { }

  login(payload, url): Observable<any> {
    console.log('whoami', url)
      return this.http.post(this.loginURL + url  + "login", payload);
  }

  setTToken(token) {
    localStorage.setItem('token', token);
  }

  setRole(role) {
    localStorage.setItem('role', role);
  }

  setId(dealerId) {
    localStorage.setItem('dealerId', dealerId);
  }
}
