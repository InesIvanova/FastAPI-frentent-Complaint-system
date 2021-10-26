import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminUrl = environment.apiUrl + "admins/"
  constructor(private http: HttpClient) { }

  registerApprover(data) {
    return this.http.post(this.adminUrl + "create-approver", data)
  }

  registerAdmin(data) {
    return this.http.post(this.adminUrl + "create-admin", data)
  }

}
