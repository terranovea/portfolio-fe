import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  implements OnInit {
  @Input() hasSearchbar:Boolean=true;
  @ViewChild(IonModal) logInModal:any;

  userID:string|null=sessionStorage.getItem("userID");
  username:string|null=sessionStorage.getItem("username");
  isLoggedIn:boolean=this.userID!=null;
  imgUrl:string|null=sessionStorage.getItem("pfpUrl");

  constructor() {}

  ngOnInit(){}

  closeModal()
  {
    this.logInModal.dismiss()
  }

  logOut()
  {
    sessionStorage.clear();
  }
}
