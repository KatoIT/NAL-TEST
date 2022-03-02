import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/user";

@Component({
  selector: 'app-team-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  users: User[] = [
    {
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
    },
    {
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
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
