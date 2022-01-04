import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(environment.apiUrl + "users")

  }

  makeApprover(id) {
    return this.http.put(environment.apiUrl + "users/" + id + "/make-approver", {})
  }

  makeAdmin(id) {
    return this.http.put(environment.apiUrl + "users/" + id + "/make-admin", {})
  }

}
