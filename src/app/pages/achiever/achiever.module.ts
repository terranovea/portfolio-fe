import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchieverPageRoutingModule } from './achiever-routing.module';

import { AchieverPage } from './achiever.page';
import { LinkbarModule } from 'src/app/components/linkbar/linkbar.module';
import { ContactFormModule } from 'src/app/components/contact-form/contact-form.module';
import { AchievementGridModule } from 'src/app/components/achievement-grid/achievement-grid.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchieverPageRoutingModule,
    LinkbarModule,
    ContactFormModule,
    AchievementGridModule,
    NavbarModule,
  ],
  declarations: [AchieverPage]
})
export class AchieverPageModule {}
