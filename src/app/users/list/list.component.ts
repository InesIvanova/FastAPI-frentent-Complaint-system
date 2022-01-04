import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users;
  constructor(private userService: UserService) { 
    this.getUsers()
  }

  getUsers() {
    this.userService.getAll().subscribe(data => {
      this.users = data
  })
  }

  makeApprover(id) {
      this.userService.makeApprover(id).subscribe(data => {
        this.getUsers()
      })
  }

  makeAdmin(id) {
    this.userService.makeAdmin(id).subscribe(data => {
      this.getUsers()
    })
  }


  ngOnInit(): void {
  }

}
