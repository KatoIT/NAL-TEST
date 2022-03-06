import {Component, Inject, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {AuthDataService} from "../../services/auth-data.service";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
  }
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })
  message = '';

  constructor(
    private authDataService: AuthDataService,
    private authService: AuthService) {
  }

  ngOnInit() {
  }

  submitLogin(): void {
    // console.log('DialogLoginComponent', this.data);
    // this.dialogRef.close({ data: this.data });
    console.log(this.loginForm.value.userName)
    this.user.email = this.loginForm.value.userName;
    this.user.password = this.loginForm.value.password;
    this.authDataService
      .authLogin(this.user)
      .subscribe(
        data => {
          console.log(data)
          this.authService.setToken(data);
        },
        (error) => {
          this.message = 'Incorrect user account or password';
          console.log('AuthService: failed', error);
        }
      );
  }



  get useName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
