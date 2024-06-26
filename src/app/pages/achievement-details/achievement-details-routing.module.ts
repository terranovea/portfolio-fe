import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchievementDetailsPage } from './achievement-details.page';

const routes: Routes = [
  {
    path: ':achievementID',
    component: AchievementDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchievementDetailsPageRoutingModule {}
