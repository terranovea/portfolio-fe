import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent  implements OnInit {

  @Input() tagName:string="";
  @Input() selectable:boolean=false;
  @Input() selected:boolean=false;
  @Output() tagToggled=new EventEmitter<string>()

  constructor() {}

  ngOnInit() {}

  onToggleSelf()
  {
    this.tagToggled.emit(this.tagName);
    this.selected=!(this.selected);
  }

}
