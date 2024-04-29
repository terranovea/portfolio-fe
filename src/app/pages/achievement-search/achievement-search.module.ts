import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchievementSearchPageRoutingModule } from './achievement-search-routing.module';

import { AchievementSearchPage } from './achievement-search.page';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { TagModule } from 'src/app/components/tag/tag.module';
import { AchievementGridModule } from 'src/app/components/achievement-grid/achievement-grid.module';
import { AchieverListModule } from 'src/app/components/achiever-list/achiever-list.module';
import { TagSelectorModule } from 'src/app/components/tag-selector/tag-selector.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchievementSearchPageRoutingModule,
    NavbarModule,
    TagModule,
    TagSelectorModule,
    AchievementGridModule,
    AchieverListModule,
  ],
  declarations: [AchievementSearchPage],
})
export class AchievementSearchPageModule {}
