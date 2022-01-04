import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  complaints;
  display;
  role;
  constructor(private complaintsService: ComplaintService, private router: Router) { }

  ngOnInit(): void {
    this.role = localStorage.getItem("role")
    this.display = this.role == 'complainer' ? true : false
    this.complaintsService.getAll().subscribe(data => {
      this.complaints = data
    })
  }

  redirectToCreate() {
    this.router.navigate(['complaints/create'])
  }

  approve(id) {
    this.complaintsService.approve(id).subscribe(data => {
      location.reload()
    })
  }

  reject(id) {
    this.complaintsService.reject(id).subscribe(data => {
      location.reload()
    })
  }

  delete(id) {
    this.complaintsService.delete(id).subscribe(data => {
      location.reload()
    })
  }

  listUers() {
    this.router.navigate(["users"])
  }

}
