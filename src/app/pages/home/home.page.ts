import { Component } from '@angular/core';
import { DBService } from 'src/services/dbService';
import { Achievement } from 'src/models/achievement';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  achieverID:string="R0000";
  achievList:Achievement[];
  constructor(private dbService:DBService) {
    this.achievList=this.dbService.getUserAchievements(this.achieverID)||[]
  }
}
