import { Component, Input, OnInit } from '@angular/core';
import { Achiever } from 'src/models/achiever';

@Component({
  selector: 'app-achiever-item',
  templateUrl: './achiever-item.component.html',
  styleUrls: ['./achiever-item.component.scss'],
})
export class AchieverItemComponent  implements OnInit {

  @Input() achiever:Achiever|null=null;

  constructor() { }

  ngOnInit() {}

}
