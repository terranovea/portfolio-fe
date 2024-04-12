import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { Achievement } from 'src/models/achievement';
import { Achiever } from 'src/models/achiever';
import { DBService } from 'src/services/dbService';

@Component({
  selector: 'app-achievement-search',
  templateUrl: './achievement-search.page.html',
  styleUrls: ['./achievement-search.page.scss'],
})
export class AchievementSearchPage implements OnInit 
{
  @ViewChild(IonModal) tagModal:any;

  allTags:string[];
  selectedTags:string[];
  allAchievements:Achievement[];
  filteredAchievements:Achievement[];
  searchString:string="";
  allAchievers:Achiever[];
  
  constructor(private dbService:DBService, private activatedRoute:ActivatedRoute) {
    this.allAchievements=this.dbService.getAllAchievements();
    this.allAchievers=this.dbService.getAllAchievers()
    this.searchString=this.activatedRoute.snapshot.params["searchString"] || "";
    console.log("I'm search page.ts and I'm outputting route snapshot params:");
    console.log(this.activatedRoute.snapshot.params);
    this.filteredAchievements=[]
    this.allTags=[];
    this.selectedTags=[];
    for(let i=0; i<this.allAchievements.length;i++)
    {
      for(let j=0;j<this.allAchievements[i].tags.length;j++)
      {
        let currentTag=this.allAchievements[i].tags[j];
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
    this.filterAchievements();
    console.log(`Selected tags:${this.selectedTags}`)
  }

  onSearchChange(searchString:string)
  {
    this.searchString=searchString;
    this.filterAchievements();
  }

  filterAchievements()
  {
    this.filterAchievByTags()
    this.filterAchievByString()
  }

  filterAchievByTags()
  {
    if(this.selectedTags.length==0)
      this.filteredAchievements=this.allAchievements;
    else
    {
      this.filteredAchievements=[];
      for(var i=0;i<this.allAchievements.length;i++)
      {
        let achiev=this.allAchievements[i]
        let nMatchingTags=0;
        for(var j=0;j<this.selectedTags.length;j++)
          if(achiev.tags.includes(this.selectedTags[j]))
            nMatchingTags++;
        if(nMatchingTags==this.selectedTags.length)//If ALL selected tags match with this achieveent, then display it
          this.filteredAchievements.push(achiev);
      }
    }
  }
  filterAchievByString()
  {
    console.log(this.searchString)
    var startingAchiev:Achievement[]=this.filteredAchievements;
    var endingAchiev:Achievement[]=[];
    for(var i=0;i<startingAchiev.length;i++)
    {
        var achiev=startingAchiev[i];
        if(achiev.title.toLowerCase().includes(this.searchString.toLowerCase())
          || achiev.desc.toLowerCase().includes(this.searchString.toLowerCase()))
          endingAchiev.push(achiev);
    }
    console.log(endingAchiev);
    this.filteredAchievements=endingAchiev;
  }

  closeModal()
  {
    this.tagModal.dismiss()
  }

  ngOnInit() {
    
  }

}
