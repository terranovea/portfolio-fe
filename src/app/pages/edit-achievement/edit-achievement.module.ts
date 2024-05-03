import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAchievementPageRoutingModule } from './edit-achievement-routing.module';

import { EditAchievementPage } from './edit-achievement.page';
import { LinkbarModule } from 'src/app/components/linkbar/linkbar.module';
import { ContactFormModule } from 'src/app/components/contact-form/contact-form.module';
import { TagModule } from 'src/app/components/tag/tag.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinkbarModule,
    ContactFormModule,
    TagModule,
    NavbarModule,
    EditAchievementPageRoutingModule
  ],
  declarations: [EditAchievementPage]
})
export class EditAchievementPageModule {}
