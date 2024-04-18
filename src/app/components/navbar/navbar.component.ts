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
  constructor() { }

  ngOnInit() {}

  closeModal()
  {
    this.logInModal.dismiss()
  }
}
