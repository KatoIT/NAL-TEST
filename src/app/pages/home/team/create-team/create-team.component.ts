import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {AuthService} from "../../../../services/auth.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {TeamService} from "../../../../services/team.service";
import {Team} from "../../../../model/team";

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  title = 'User Profile';
  team: Team = {};
  readonly = false;

  teamForm: FormGroup = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
  });

  constructor(private titleService: Title,
              private teamService: TeamService,
              private router: Router) {
    this.titleService.setTitle(this.title);

    this.team = {
      name: '',
      description: '',
    }

  }

  ngOnInit(): void {

  }

  createTeam() {
    this.team = this.teamForm.value
    this.teamService.saveTeam(this.team).subscribe(value => console.log(value));
    this.router.navigate(['/home/teams']).then(value => ['error']);
  }

  getTeam() {
    this.teamForm = new FormGroup({
      name: new FormControl(this.team.name, [
        Validators.required,
        Validators.minLength(5)]),
      description: new FormControl(this.team.description, [
        Validators.required,
        Validators.minLength(5)]),
    });
  }


  get name() {
    return this.teamForm.get('name');
  }

  get description() {
    return this.teamForm.get('description');
  }

}
