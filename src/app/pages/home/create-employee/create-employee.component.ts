import {Component, OnInit} from '@angular/core';
import {Employee} from "../../../model/employee";
import {Title} from "@angular/platform-browser";
import {AuthService} from "../../../services/auth.service";
import {environment} from "../../../../environments/environment";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {EmployeeService} from "../../../services/employee.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  id: string | null = '';
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
    avatar: 'https://www.toponseek.com/blogs/wp-content/uploads/2019/06/toi-uu-hinh-anh-optimize-image-4-1200x900.jpg'
  };

  userForm: FormGroup = new FormGroup({
    id: new FormControl(this.user.id, [
      Validators.required,
      Validators.minLength(4),
    ]),
    email: new FormControl(this.user.email, [
      Validators.required,
      Validators.minLength(5)]),
    password: new FormControl(this.user.password, [
      Validators.required,
      Validators.minLength(8)]),
    fullName: new FormControl(this.user.fullName, [
      Validators.required,
      Validators.minLength(5)]),
    gender: new FormControl(this.user.gender, [
      Validators.required]),
    introduce: new FormControl(this.user.introduce, [
      Validators.required,
      Validators.minLength(10)]),
    selfIntroduce: new FormControl(this.user.selfIntroduce, [
      Validators.required,
      Validators.minLength(10)]),
    address: new FormControl(this.user.address, [
      Validators.required,
      Validators.minLength(5)]),
    birthday: new FormControl(formatDate(this.user?.birthday ? this.user?.birthday : new Date(), "yyyy-MM-dd", "en")),
    joinDate: new FormControl(formatDate(this.user?.joinDate ? this.user?.joinDate : new Date(), "yyyy-MM-dd", "en")),
    avatar: new FormControl(this.user.avatar, [
      Validators.required,
      Validators.minLength(5)])
  });

  constructor(private titleService: Title,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute,
              private userService: EmployeeService,
              private router: Router) {
    this.titleService.setTitle(this.title);
    this.readonly = authService.roles !== environment.role_admin;
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      if (this.id) {
        this.userService.findById(this.id);
      }
    });
  }

  ngOnInit(): void {
  }

  createUser() {
    console.log(this.userForm.value);
    this.router.navigate(['/home/employees']).then(value => ['error']);
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get fullName() {
    return this.userForm.get('fullName');
  }

  get gender() {
    return this.userForm.get('gender');
  }

  get introduce() {
    return this.userForm.get('introduce');
  }

  get selfIntroduce() {
    return this.userForm.get('selfIntroduce');
  }

  get address() {
    return this.userForm.get('address');
  }

  get birthday() {
    return this.userForm.get('birthday');
  }

  get joinDate() {
    return this.userForm.get('joinDate');
  }

  get avatar() {
    return this.userForm.get('avatar');
  }
}
