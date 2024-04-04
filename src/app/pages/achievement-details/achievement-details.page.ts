import { Component, OnInit, Input } from '@angular/core';
import { Achievement } from 'src/models/achievement';
import { ActivatedRoute } from '@angular/router';
import { DBService } from 'src/services/dbService';

@Component({
  selector: 'app-achievement-details',
  templateUrl: './achievement-details.page.html',
  styleUrls: ['./achievement-details.page.scss'],
  providers: [DBService]
})
export class AchievementDetailsPage implements OnInit {
  @Input() achiev:Achievement|null;

  
  achievID:any;

  constructor(private activatedRoute:ActivatedRoute, private dbService:DBService)
  {
    this.achiev=null;
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>
      {
        if(paramMap.has("achievID"))
          this.achievID=paramMap.get("achievID");
      })
      this.achiev=this.dbService.getAchievByID(this.achievID)
      console.log("AchievID: "+this.achievID)
      console.log("Achiev test:")
      console.log(this.dbService.getAchievByID(this.achievID))
  }

}
