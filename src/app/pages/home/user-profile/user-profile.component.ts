import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {User} from "../../../model/user";
import {AuthService} from "../../../services/auth.service";
import {environment} from "../../../../environments/environment";
import {UserService} from "../../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {formatDate} from "@angular/common";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  id: string | null = '';
  title = 'User Profile';
  readonly = false;
  user: User = {};

  userForm: FormGroup = new FormGroup({
    selfIntroduce: new FormControl(),
    avatar: new FormControl()
  });

  constructor(private titleService: Title,
              private authService: AuthService,
              private userService: UserService) {

    this.titleService.setTitle(this.title);
    if (authService.getRoles() === environment.role_admin) {
      this.readonly = false;
    } else {
      this.readonly = true;
    }
    const id = authService.getUserId();
    if (id !== undefined) {
      userService.findById(id).subscribe(value => {
        this.user = value;
        this.userForm = new FormGroup({
          selfIntroduce: new FormControl(this.user.selfIntroduce, [
            Validators.required,
            Validators.minLength(10)]),
          avatar: new FormControl(this.user.avatar)
        });
      });
    }

  }

  ngOnInit() {
  }

  updateUser() {
    this.user.selfIntroduce = this.userForm.value.selfIntroduce;
    this.user.avatar = this.userForm.value.avatar;
    if (this.id) {
      this.userService.updateUser(this.id, this.user).subscribe(value => console.log(value));
    }
  }


  get selfIntroduce() {
    return this.userForm.get('selfIntroduce');
  }

  get avatar() {
    return this.userForm.get('avatar');
  }

}
