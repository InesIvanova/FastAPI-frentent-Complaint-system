import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-create-approver',
  templateUrl: './create-approver.component.html',
  styleUrls: ['./create-approver.component.css']
})
export class CreateApproverComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private fb: FormBuilder, 
    private spinner: NgxSpinnerService,
    private cd: ChangeDetectorRef, 
    private adminService: AdminService, 
    private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.required],
      certificate: [''],
      extension: [''],
    })
  }

  register() {
    if (this.registerForm.get("certificate").value.startsWith("data:")) {
      console.log("aha ")
      var truncated_base64 = this.registerForm.get("certificate").value.split(',')[1];
      this.registerForm.patchValue({
        certificate: truncated_base64
      });
    }
    this.spinner.show();

    this.adminService.registerApprover(this.registerForm.value).subscribe(res => {
      this.router.navigate(['complaints']);
      this.spinner.hide();

    })
  }

  onFileChange(event) {
    let reader = new FileReader();
   
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      const extension = event.target.files[0].name.split('.').at(-1)
      this.registerForm.patchValue({
        extension: extension
      });
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.registerForm.patchValue({
          certificate: reader.result
        });
        
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

}
