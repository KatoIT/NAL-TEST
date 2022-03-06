import {Component, OnInit} from '@angular/core';
import {User} from "../../../../model/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {AuthService} from "../../../../services/auth.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id: string | null = '';
  title = 'User Profile';
  user: User = {};
  readonly = false;

  userForm: FormGroup = new FormGroup({
    id: new FormControl(),
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
              private authService: AuthService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router) {
    this.titleService.setTitle(this.title);
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      //
      this.id = paramMap.get('id');
      if (this.id) {
        this.userService.findById(this.id).subscribe(value => {
          this.user = value;
          this.createForm();
        });
      }
    });
  }

  ngOnInit(): void {
  }

  updateUser() {
    this.user = this.userForm.value
    if (this.id) {
      this.userService.updateUser(this.id, this.user).subscribe(value => console.log(value));
    }
    this.router.navigate(['/home/users']).then(value => {
      console.log(value);
      return ['error'];
    });
  }

  createForm() {
    this.userForm = new FormGroup({
      id: new FormControl(this.id),
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
