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

  selectedTags:string[]=[];
  allAchievements:Achievement[]=[];
  filteredAchievements:Achievement[];
  searchString:string="";
  allAchievers:Achiever[];
  filteredAchievers:Achiever[];
  
  constructor(private dbService:DBService, private activatedRoute:ActivatedRoute) {
    var allAchievements=this.dbService.getAllAchievements();
    if(allAchievements!=null)
      this.allAchievements=allAchievements;
    this.allAchievers=this.dbService.getAllAchievers()
    this.searchString=this.activatedRoute.snapshot.params["searchString"] || "";

    this.filteredAchievers=[]
    this.filteredAchievements=[]
    this.selectedTags=[];

    this.filterSearchResults()
  }

  onSearchChange(searchString:string)
  {
    console.log("onSearchChange called");
    this.searchString=searchString;
    this.filterSearchResults();
  }

  filterSearchResults()
  {
    console.log("filterSearchResults called");
    this.filterAchievers();
    this.filterAchievements();
  }

  filterAchievers()
  {
    console.log("filterAchievers called");
    var startingAchiev:Achiever[]=this.allAchievers;
    var endingAchiev:Achiever[]=[];
    for(var i=0;i<startingAchiev.length;i++)
    {
        var achiev=startingAchiev[i];
        if(achiev.name.toLowerCase().includes(this.searchString.toLowerCase())
          || achiev.surname.toLowerCase().includes(this.searchString.toLowerCase())
          || achiev.username.toLowerCase().includes(this.searchString.toLowerCase()))
          endingAchiev.push(achiev);
    }
    console.log(endingAchiev);
    this.filteredAchievers=endingAchiev;
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



  ngOnInit() {
    
  }

}
