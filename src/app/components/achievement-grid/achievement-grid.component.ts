import { Component, OnInit, Input } from '@angular/core';
import { DBService } from 'src/services/dbService';
import { Achievement } from 'src/models/achievement';

@Component({
  selector: 'app-achievement-grid',
  templateUrl: './achievement-grid.component.html',
  styleUrls: ['./achievement-grid.component.scss'],
  providers:[DBService],
})
export class AchievementGridComponent  implements OnInit {
  @Input() achievList:Achievement[]=[];

  constructor(private dbService:DBService) {
    if(this.achievList.length==0)
      this.achievList=dbService.getAchievList();
  }

  ngOnInit() {}

}
