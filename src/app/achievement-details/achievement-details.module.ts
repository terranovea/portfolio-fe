import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchievementDetailsPageRoutingModule } from './achievement-details-routing.module';

import { AchievementDetailsPage } from './achievement-details.page';
import { LinkbarModule } from '../linkbar/linkbar.module';
import { ContactFormModule } from '../contact-form/contact-form.module';
import { TagModule } from '../tag/tag.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchievementDetailsPageRoutingModule,
    LinkbarModule,
    ContactFormModule,
    TagModule
  ],
  declarations: [AchievementDetailsPage]
})
export class AchievementDetailsPageModule {}
