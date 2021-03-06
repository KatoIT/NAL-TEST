import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/user";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private router: Router,
              private userService: UserService) {
    this.userService.getAll().subscribe(value => {
      this.users = value;
    })
  }

  ngOnInit() {
  }

  public viewProfileEmployee(id: number | undefined): void {
    this.router.navigate(['error'])
  }
}
