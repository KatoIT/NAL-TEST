import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {User} from "../../../model/user";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  title = 'User Profile';
  user: User = {
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

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
  }

}
