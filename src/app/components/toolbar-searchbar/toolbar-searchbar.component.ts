import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-searchbar',
  templateUrl: './toolbar-searchbar.component.html',
  styleUrls: ['./toolbar-searchbar.component.scss'],
})
export class ToolbarSearchbarComponent  implements OnInit {

  searchString:string="";
  constructor(private router:Router){}

  ngOnInit(){}

  routeSearchResults()
  {
    console.log(this.searchString)
    this.router.navigate([`achievement-search/${this.searchString}`])
  }

}
