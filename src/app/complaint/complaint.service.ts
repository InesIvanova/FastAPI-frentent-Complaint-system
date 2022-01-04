import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  complaintsPath: string = environment.apiUrl + "complaints";
  approversPath : string = environment.apiUrl + "complaints/"
  adminPath: string = environment.apiUrl + "complaints/";

  constructor(private http: HttpClient) { }
  
  getAll() {
    return this.http.get(this.complaintsPath)
  }

  create(data) {
    console.log('service')
    return this.http.post(this.complaintsPath, data)
  }

  approve(id) {
    return this.http.put(this.approversPath + id + "/approve", {})
  }

  reject(id) {
    
    return this.http.put(this.approversPath + id + "/reject", {})
  }

  delete(id) {
    return this.http.delete(this.adminPath + id)
  }
}
