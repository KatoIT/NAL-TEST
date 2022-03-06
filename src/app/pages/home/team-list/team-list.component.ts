import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Team} from "../../../model/team";
import {TeamService} from "../../../services/team.service";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: Team[] = [];

  constructor(private router: Router,
              private teamService: TeamService) {
    this.teamService.getAll().subscribe(value => {
      this.teams = value;
    })
  }

  ngOnInit() {
  }

  public viewProfileEmployee(id: number | undefined): void {
    this.router.navigate(['error'])
  }
}
