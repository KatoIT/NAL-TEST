import {Component, OnInit} from '@angular/core';
import {Team} from "../../../../model/team";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {AuthService} from "../../../../services/auth.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {TeamService} from "../../../../services/team.service";

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  id: string | null = null;
  title = 'User Profile';
  team: Team = {};
  readonly = false;

  teamForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
  });

  constructor(private titleService: Title,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute,
              private teamService: TeamService,
              private router: Router) {
    this.titleService.setTitle(this.title);
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      if (this.id) {
        this.teamService.findById(this.id).subscribe(value => {
          this.team = value;
          this.getTeam();
        });
      }
    });
  }

  ngOnInit(): void {

  }

  updateTeam() {
    this.team = this.teamForm.value
    if (this.id) {
      this.teamService.updateTeam(this.id, this.team).subscribe(value => console.log(value));
    }
    this.router.navigate(['/home/teams']).then(value => ['error']);
  }

  getTeam() {
    this.teamForm = new FormGroup({
      id: new FormControl(this.id),
      name: new FormControl(this.team.name, [Validators.required, Validators.minLength(5)]),
      description: new FormControl(this.team.description, [Validators.required, Validators.minLength(5)]),
    });
  }


  get name() {
    return this.teamForm.get('name');
  }

  get description() {
    return this.teamForm.get('description');
  }

}
