import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Achievement } from 'src/models/achievement';
import { DBService } from 'src/services/dbService';

@Component({
  selector: 'app-achiever',
  templateUrl: './achiever.page.html',
  styleUrls: ['./achiever.page.scss'],
})
export class AchieverPage implements OnInit {

  achieverID:string=this.activatedRoute.snapshot.params['achieverID'];
  achievList:Achievement[]=[];
  constructor(private dbService:DBService,private activatedRoute:ActivatedRoute)
  {
    console.log("Ich bin constructor")
    this.achievList=this.dbService.getUserAchievements(this.achieverID);
  }

  ngOnInit()
  {
  }
}
