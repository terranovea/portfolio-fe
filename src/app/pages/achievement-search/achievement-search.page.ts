import { Component, OnInit } from '@angular/core';
import { DBService } from 'src/services/dbService';

@Component({
  selector: 'app-achievement-search',
  templateUrl: './achievement-search.page.html',
  styleUrls: ['./achievement-search.page.scss'],
  providers:[DBService],
})
export class AchievementSearchPage implements OnInit {

  constructor(private dbService:DBService) {
    var variable=dbService.getAchievList()
  }

  ngOnInit() {
    
  }

}
