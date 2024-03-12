import { Component, OnInit, Input} from '@angular/core';
import { Achievement } from 'src/models/achievement';

@Component({
  selector: 'app-achievement-card',
  templateUrl: './achievement-card.component.html',
  styleUrls: ['./achievement-card.component.scss'],
})
export class AchievementCardComponent  implements OnInit {

  @Input() achiev:Achievement;
  //achiev:Achievement;
  
  achievTest=new Achievement(
    "A0000",
    "Test",
    "Ciao sono Josh",
    "achievement",
    "../../../../assets/img/0.jpg",
    new Date("09-01-2021"),
    new Date("05-14-2022")
    )
  
  

  constructor()
  {
    this.achiev=this.achievTest;
  }


  ngOnInit() {}

}
