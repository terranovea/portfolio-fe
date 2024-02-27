import { Component, OnInit, Input } from '@angular/core';
import { Achievement } from 'src/models/achievement';

@Component({
  selector: 'app-achievement-details',
  templateUrl: './achievement-details.page.html',
  styleUrls: ['./achievement-details.page.scss'],
})
export class AchievementDetailsPage implements OnInit {
  @Input() achiev:Achievement;

  achievTest=new Achievement(
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
    this.achiev=this.achievTest;
  }

  ngOnInit() {
  }

}
