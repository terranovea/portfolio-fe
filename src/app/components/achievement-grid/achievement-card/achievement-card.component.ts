import { Component, OnInit, Input} from '@angular/core';
import { Achievement } from 'src/models/achievement';

@Component({
  selector: 'app-achievement-card',
  templateUrl: './achievement-card.component.html',
  styleUrls: ['./achievement-card.component.scss'],
})
export class AchievementCardComponent  implements OnInit {

  @Input() achievement:Achievement|null=null;
  achieverString:string="";
  
  constructor(){}

  ngOnInit()
  {
    console.log(this.achievement)
    if(this.achievement!=null)
    {
      if(this.achievement.achieverObjs.length>0)
      {
        console.log("ACHIEVEMENT CARD CONSTRUCTOR");
        console.log(this.achievement.achieverObjs);
        var firstAchiever=this.achievement.achieverObjs[0];
        console.log(firstAchiever);
        this.achieverString=firstAchiever.name+" "+firstAchiever.surname;
        console.log(this.achieverString)
      }
    }
  }
}
