import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent  implements OnInit {
  @Input() bigTitle:boolean=true;
  username:string="";
  password:string="";

  constructor(private router:Router) { }

  ngOnInit() {}

  logInAttempt()
  {
    console.log("Log in clicked!");
    //backendCheck
    //onSuccess:
    var userID:string="R0000";
    var token:string="token!";
    var pfpUrl:string="../../../../assets/img/Katze.jpg";
    sessionStorage.setItem('userID', userID);
    sessionStorage.setItem('username', this.username);
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('pfpUrl', pfpUrl);
    console.log(sessionStorage.getItem("username"));
    console.log(sessionStorage.getItem("userID"));
    console.log(sessionStorage.getItem("token"));
    console.log(sessionStorage.getItem("pfpUrl"));

    this.router.navigate([`achiever/${userID}`])
  }
}
