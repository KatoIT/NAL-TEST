import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Employee} from "../../../model/employee";
import {AuthService} from "../../../services/auth.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  title = 'User Profile';
  readonly = false;
  user: Employee = {
    id: 1,
    email: 'abc@gmai.com',
    fullName: 'Nguyen Van A',
    birthday: new Date(),
    gender: true,
    introduce: 'introduce',
    selfIntroduce: 'selfIntroduce',
    password: 'aaaaa',
    joinDate: new Date(),
    address: 'Đống Đa, Hà Nội',
    avatar: 'avatar.png'
  };

  constructor(private titleService: Title,
              private authService: AuthService) {
    this.titleService.setTitle(this.title);
    if (authService.roles === environment.role_admin) {
      this.readonly = false;
    } else {
      this.readonly = true;
    }
  }

  ngOnInit() {
  }

}
