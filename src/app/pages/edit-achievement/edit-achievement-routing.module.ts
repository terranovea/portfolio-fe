import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAchievementPage } from './edit-achievement.page';

const routes: Routes = [
  {
    path: '',
    component: EditAchievementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAchievementPageRoutingModule {}
