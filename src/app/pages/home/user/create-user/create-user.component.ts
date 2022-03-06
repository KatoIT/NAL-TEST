import {Component, OnInit} from '@angular/core';
import {User} from "../../../../model/user";
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-create-team-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  title = 'User Profile';
  user: User = {};
  readonly = false;

  userForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    fullName: new FormControl(),
    gender: new FormControl(),
    introduce: new FormControl(),
    selfIntroduce: new FormControl(),
    address: new FormControl(),
    birthday: new FormControl(),
    joinDate: new FormControl(),
    avatar: new FormControl()
  });

  constructor(private titleService: Title,
              private userService: UserService,
              private router: Router) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      gender: new FormControl(true, [Validators.required]),
      introduce: new FormControl('', [Validators.required, Validators.minLength(10)]),
      selfIntroduce: new FormControl('', [Validators.required, Validators.minLength(10)]),
      address: new FormControl('', [Validators.required, Validators.minLength(5)]),
      birthday: new FormControl(formatDate(new Date(), "yyyy-MM-dd", "en")),
      joinDate: new FormControl(formatDate(new Date(), "yyyy-MM-dd", "en")),
      avatar: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  createUser() {
    this.user = this.userForm.value
    this.userService.saveUser(this.user).subscribe(value => console.log(value));
    this.router.navigate(['/home/users']).then(value => {
      console.log(value);
      return ['error']
    });
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
