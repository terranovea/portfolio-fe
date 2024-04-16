import { Component, OnInit, Input } from '@angular/core';
import { Achievement } from 'src/models/achievement';

@Component({
  selector: 'app-achievement-grid',
  templateUrl: './achievement-grid.component.html',
  styleUrls: ['./achievement-grid.component.scss'],
})
export class AchievementGridComponent  implements OnInit {
  @Input() achievList:Achievement[]=[];
  
  constructor()
  {}

  ngOnInit() {}

}
