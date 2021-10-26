import { Component, OnInit } from '@angular/core';

import {  FormBuilder, FormGroup,Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { RegisterModelForm } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.required],
      iban: ['', [Validators.required, Validators.minLength(22), Validators.maxLength(22)]]
    })
  }

  login() {
    this.registerService.register(this.loginForm.value).subscribe(res => {
      this.router.navigate(['auth']);
    })
  }

}
