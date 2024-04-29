import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-achievement',
  templateUrl: './create-achievement.page.html',
  styleUrls: ['./create-achievement.page.scss'],
})
export class CreateAchievementPage implements OnInit {
  titleValue:string="";
  startDateValue:Date=new Date();
  endDateValue:Date=new Date();
  descriptionValue:string="";
  tagsValue:string[]=[]

  constructor(private router:Router) { }

  ngOnInit() {
  }

  validateAchievement()
  {
    //Yep it's good!
    this.uploadAchievement();
  }

  uploadAchievement()
  {
    this.onUploadSuccess();
  }

  onUploadSuccess()
  {
    this.router.navigate([`achiever/${sessionStorage.getItem('userID')}`])
  }

}
