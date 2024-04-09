import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Achievement } from 'src/models/achievement';
import { Achiever } from 'src/models/achiever';
import { DBService } from 'src/services/dbService';

@Component({
  selector: 'app-achiever',
  templateUrl: './achiever.page.html',
  styleUrls: ['./achiever.page.scss'],
})
export class AchieverPage implements OnInit {

  achieverID:string=this.activatedRoute.snapshot.params['achieverID'];
  achiever:Achiever|null=this.dbService.getAchieverByID(this.achieverID);
  achievList:Achievement[]=[];

  constructor(private dbService:DBService,private activatedRoute:ActivatedRoute)
  {
    this.achievList=this.dbService.getUserAchievements(this.achieverID);
  }

  ngOnInit()
  {
  }
}
