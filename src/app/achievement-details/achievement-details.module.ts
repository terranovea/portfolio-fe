import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchievementDetailsPageRoutingModule } from './achievement-details-routing.module';

import { AchievementDetailsPage } from './achievement-details.page';
import { LinkbarComponent } from '../linkbar/linkbar.component';
import { LinkbarModule } from '../linkbar/linkbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchievementDetailsPageRoutingModule,
    LinkbarModule
  ],
  declarations: [AchievementDetailsPage]
})
export class AchievementDetailsPageModule {}
