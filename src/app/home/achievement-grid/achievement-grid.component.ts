import { Component, OnInit } from '@angular/core';
import { getAchievList } from 'src/services/dbCalls';
import { Achievement } from 'src/models/achievement';

@Component({
  selector: 'app-achievement-grid',
  templateUrl: './achievement-grid.component.html',
  styleUrls: ['./achievement-grid.component.scss'],
})
export class AchievementGridComponent  implements OnInit {

  achievList:Achievement[]=[];

  constructor() {
    getAchievList().then((value)=>this.achievList=value);
  }

  ngOnInit() {}

}
