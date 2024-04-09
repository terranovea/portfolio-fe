import { Component, Input, OnInit } from '@angular/core';
import { Achiever } from 'src/models/achiever';

@Component({
  selector: 'app-achiever-list',
  templateUrl: './achiever-list.component.html',
  styleUrls: ['./achiever-list.component.scss'],
})
export class AchieverListComponent  implements OnInit {
  @Input() achieverList:Achiever[]|null=null;

  constructor() { }

  ngOnInit() {}

}
