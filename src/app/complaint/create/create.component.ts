import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComplaintService } from '../complaint.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  complainForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private spinner: NgxSpinnerService,
    private cd: ChangeDetectorRef, 
    private complaintService: ComplaintService,
    private router: Router) { 
    this.complainForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', Validators.required],
      photo: [''],
      photo_extension: [''] 
    })
  }

  ngOnInit(): void {
  }

  create() {
    console.log(this.complainForm);
    this.spinner.show();

    if (this.complainForm.get("photo").value.startsWith("data:")) {
      console.log("aha ")
      var truncated_base64 = this.complainForm.get("photo").value.split(',')[1];
      this.complainForm.patchValue({
        photo: truncated_base64
      });
    }
    this.complaintService.create(this.complainForm.value).subscribe(data => {
      console.log(data);
      this.spinner.hide();

      this.router.navigate(['complaints'])
    })
  }

  
  onFileChange(event) {
    let reader = new FileReader();
   
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      const extension = event.target.files[0].name.split('.').at(-1)
      this.complainForm.patchValue({
        photo_extension: extension
      });
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.complainForm.patchValue({
          photo: reader.result
        });
        
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

}
