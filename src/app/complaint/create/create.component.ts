import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComplainModel } from '../complain.model';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  complainForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private cd: ChangeDetectorRef, 
    private complaintService: ComplaintService,
    private router: Router) { 
    this.complainForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', Validators.required],
      photo: ['', Validators.required],
      photo_extension: ['', Validators.required] 
    })
  }

  ngOnInit(): void {
  }

  create() {
    console.log(this.complainForm)
    this.complaintService.create(this.complainForm.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['complaints'])
    })
  }

  
  onFileChange(event) {
    let reader = new FileReader();
   
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        console.log('result')
        console.log(reader.result)

        this.complainForm.patchValue({
          photo: reader.result
        });
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

}
