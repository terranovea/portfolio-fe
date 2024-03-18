import { Component, OnInit, Input} from '@angular/core';
import { Achievement } from 'src/models/achievement';

@Component({
  selector: 'app-achievement-card',
  templateUrl: './achievement-card.component.html',
  styleUrls: ['./achievement-card.component.scss'],
})
export class AchievementCardComponent  implements OnInit {

  @Input() achiev:Achievement|null=null;
  
  constructor()
  {}


  ngOnInit() {}

}
