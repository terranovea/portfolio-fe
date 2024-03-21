import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchievementSearchPage } from './achievement-search.page';

const routes: Routes = [
  {
    path: '',
    component: AchievementSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchievementSearchPageRoutingModule {}
