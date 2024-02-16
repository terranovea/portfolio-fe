import { Component, OnInit } from '@angular/core';
import { Achievement } from 'src/models/achievement';

@Component({
  selector: 'app-achievement-card',
  templateUrl: './achievement-card.component.html',
  styleUrls: ['./achievement-card.component.scss'],
})
export class AchievementCardComponent  implements OnInit {

  achiev=new Achievement(
    "A0000",
    "Digital Story Explorer",
    "Entschuldigugn, wo ist das Museum? Reicht oder Links? Ist das Museum da druben? Karl, wo bist du?",
    "achievement",
    "../../../../assets/img/0.jpg",
    new Date("09-01-2021"),
    new Date("05-14-2022")
    )

  constructor()
  {

  }


  ngOnInit() {}

}
