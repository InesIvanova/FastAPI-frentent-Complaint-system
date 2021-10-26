import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-create-approver',
  templateUrl: './create-approver.component.html',
  styleUrls: ['./create-approver.component.css']
})
export class CreateApproverComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private adminService: AdminService, 
    private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.required],
      certificate: ['', Validators.required],
      extension: ['', Validators.required],
    })
  }

  register() {
    this.adminService.registerApprover(this.registerForm.value).subscribe(res => {
      this.router.navigate(['complaints']);
    })
  }

}
