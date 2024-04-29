import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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

  constructor(private router:Router, private toastController:ToastController) { }

  ngOnInit() {
  }

  

  validateAchievement()
  {
    var isFormValid=true; //until proven invalid
    var error:{type:string,msg:string}={type:"",msg:""};
    //Yep it's good!
    if(this.titleValue=="")
    {
      error={type:"empty-title",msg:"Title cannot be empty"};
      isFormValid=false;
    }
    if(isFormValid)
      this.uploadAchievement();
    else
      this.presentErrorToast(error.msg)
  }

  uploadAchievement()
  {
    this.onUploadSuccess();
  }

  onUploadSuccess()
  {
    this.presentSuccessToast();
    setTimeout(
      ()=>
      {
        this.router.navigate([`achiever/${sessionStorage.getItem('userID')}`])
      },1500);
  }

  navigateToAchieverPage()
  {
    
  }

  async presentErrorToast(msg:string)
  {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'bottom',
      color:'danger',
    });

    await toast.present();
  }

  async presentSuccessToast()
  {
    const toast = await this.toastController.create({
      message: "Achievement uploaded",
      duration: 1500,
      position: 'bottom',
      color:'success',
    });

    await toast.present();
  }
}
