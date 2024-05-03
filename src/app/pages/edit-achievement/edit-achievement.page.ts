import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Achievement } from 'src/models/achievement';
import { DBService } from 'src/services/dbService';

@Component({
  selector: 'app-edit-achievement',
  templateUrl: './edit-achievement.page.html',
  styleUrls: ['./edit-achievement.page.scss'],
})
export class EditAchievementPage implements OnInit {

  @Input() achiev: Achievement | null;

  achievID: string = this.activatedRoute.snapshot.params['achievementID'];

  constructor(private activatedRoute: ActivatedRoute, private dbService: DBService) {
    this.achiev = null;
  }

  ngOnInit() {
    this.achiev = this.dbService.getAchievementByID(this.achievID)
    console.log("AchievID: " + this.achievID)
    console.log("Achiev test:")
    console.log(this.dbService.getAchievementByID(this.achievID))
  }
}
