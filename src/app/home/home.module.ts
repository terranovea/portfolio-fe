import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AchievementGridComponent } from './achievement-grid/achievement-grid.component';
import { AchievementCardComponent } from './achievement-grid/achievement-card/achievement-card.component';
import { LinkbarModule } from '../linkbar/linkbar.module';
import { ContactFormModule } from '../contact-form/contact-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    LinkbarModule,
    ContactFormModule
  ],
  declarations: [HomePage,AchievementGridComponent,AchievementCardComponent]
})
export class HomePageModule {}
