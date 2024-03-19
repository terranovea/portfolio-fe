import { Component, OnInit } from '@angular/core';
import { DBService } from 'src/services/dbService';
import { Achievement } from 'src/models/achievement';

@Component({
  selector: 'app-achievement-grid',
  templateUrl: './achievement-grid.component.html',
  styleUrls: ['./achievement-grid.component.scss'],
  providers:[DBService],
})
export class AchievementGridComponent  implements OnInit {

  achievList:Achievement[]=[];

  constructor(private dbService:DBService) {
    this.achievList=dbService.getAchievList();
  }

  ngOnInit() {}

}
