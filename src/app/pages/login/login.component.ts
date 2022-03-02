import { Component, OnInit } from '@angular/core';
import {Employee} from "../../model/employee";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:Employee = {};
  constructor() { }

  ngOnInit() {
  }

}
