import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Achievement } from 'src/models/achievement';
import { DBService } from 'src/services/dbService';

@Component({
  selector: 'app-tag-selector',
  templateUrl: './tag-selector.component.html',
  styleUrls: ['./tag-selector.component.scss'],
})
export class TagSelectorComponent  implements OnInit {
  @ViewChild(IonModal) tagModal:any;
  @Input() buttonText:string="Select tags";
  @Input() isButtonBlock:boolean=false;
  @Input() selectedTags:string[]=[]
  @Output('onTagUpdate') tagUpdateEventEmitter= new EventEmitter<string[]>

  allTags:string[]=[];
  allAchievements:Achievement[]=[];

  constructor(private dbService:DBService)
  {
    var allAchievements=this.dbService.getAllAchievements();
    if(allAchievements!=null)
      this.allAchievements=allAchievements;

    //gets the list of all existing tags
    //In the future I want this to use the tag db table without querying the achievemets
    for(let i=0; i<this.allAchievements.length;i++)
    {
      for(let j=0;j<this.allAchievements[i].tags.length;j++)
      {
        let currentTag=this.allAchievements[i].tags[j];
        if(!(this.allTags.includes(currentTag)))
          this.allTags.push(currentTag);
      }
    }
  }

  ngOnInit() {}

  onToggleTag(tagName:string)
  {
    if(this.selectedTags.includes(tagName))
      this.selectedTags.splice(this.selectedTags.indexOf(tagName),1);
    else
      this.selectedTags.push(tagName);
    this.emitTagToggled();
    console.log(`Selected tags:${this.selectedTags}`)
  }

  closeModal()
  {
    this.tagModal.dismiss()
  }

  emitTagToggled()
  {
    this.tagUpdateEventEmitter.emit(this.selectedTags)
  }

}
