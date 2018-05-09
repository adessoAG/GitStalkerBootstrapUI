import { Injectable } from '@angular/core';
import { GlobalNavigationService } from './global-navigation.service';
import { Team } from '../entities/team';
import { TEAMS } from '../mock-data';

@Injectable()
export class TeamService {

  teams: Team [] = TEAMS;

  constructor(private globalNavService: GlobalNavigationService) {
    globalNavService.tellNumOfEntities(this.teams.length);
   }

  getTeams() {
    return this.teams;
  }

  getTeamDetails(name: string) : Team {
    for (const team of this.teams) {
      if (team.name.toLocaleLowerCase === name.toLocaleLowerCase) {
        return team;
      }
    }
  }

}