import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AchievementGridModule } from '../../components/achievement-grid/achievement-grid.module';
import { LinkbarModule } from 'src/app/components/linkbar/linkbar.module';
import { ContactFormModule } from 'src/app/components/contact-form/contact-form.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    LinkbarModule,
    ContactFormModule,
    AchievementGridModule,
    NavbarModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
