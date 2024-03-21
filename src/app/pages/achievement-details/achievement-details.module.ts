import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchievementDetailsPageRoutingModule } from './achievement-details-routing.module';

import { AchievementDetailsPage } from './achievement-details.page';
import { LinkbarModule } from 'src/app/components/linkbar/linkbar.module';
import { ContactFormModule } from 'src/app/components/contact-form/contact-form.module';
import { TagModule } from 'src/app/components/tag/tag.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchievementDetailsPageRoutingModule,
    LinkbarModule,
    ContactFormModule,
    TagModule,
    NavbarModule
  ],
  declarations: [AchievementDetailsPage]
})
export class AchievementDetailsPageModule {}
