import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAchievementPageRoutingModule } from './create-achievement-routing.module';

import { CreateAchievementPage } from './create-achievement.page';
import { TagSelectorModule } from 'src/app/components/tag-selector/tag-selector.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAchievementPageRoutingModule,
    TagSelectorModule
  ],
  declarations: [CreateAchievementPage]
})
export class CreateAchievementPageModule {}
