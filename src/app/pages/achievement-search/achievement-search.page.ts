import { Component, OnInit } from '@angular/core';
import { Achievement } from 'src/models/achievement';
import { DBService } from 'src/services/dbService';

@Component({
  selector: 'app-achievement-search',
  templateUrl: './achievement-search.page.html',
  styleUrls: ['./achievement-search.page.scss'],
  providers:[DBService],
})
export class AchievementSearchPage implements OnInit {
  allTags:string[];
  selectedTags:string[];
  allAchiev:Achievement[];
  filteredAchiev:Achievement[];
  
  constructor(private dbService:DBService) {
    this.allAchiev=dbService.getAchievList()
    this.filteredAchiev=[]
    this.allTags=[];
    this.selectedTags=[];
    for(let i=0; i<this.allAchiev.length;i++)
    {
      for(let j=0;j<this.allAchiev[i].tags.length;j++)
      {
        let currentTag=this.allAchiev[i].tags[j];
        if(!(this.allTags.includes(currentTag)))
          this.allTags.push(currentTag);
      }
    }
    this.filterAchievements()
  }

  onToggleTag(tagName:string)
  {
    if(this.selectedTags.includes(tagName))
      this.selectedTags.splice(this.selectedTags.indexOf(tagName),1);
    else
      this.selectedTags.push(tagName);
    this.filterAchievements()
    console.log(`Selected tags:${this.selectedTags}`)
  }

  filterAchievements()
  {
    if(this.selectedTags.length==0)
      this.filteredAchiev=this.allAchiev;
    else
    {
      this.filteredAchiev=[];
      for(var i=0;i<this.allAchiev.length;i++)
      {
        let achiev=this.allAchiev[i]
        let nMatchingTags=0;
        for(var j=0;j<this.selectedTags.length;j++)
          if(achiev.tags.includes(this.selectedTags[j]))
            nMatchingTags++;
        if(nMatchingTags==this.selectedTags.length)//If ALL selected tags match with this achieveent, then display it
          this.filteredAchiev.push(achiev);
      }
    }
  }

  ngOnInit() {
    
  }

}
