import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'achievement-search',
    loadChildren: () => import('./pages/achievement-search/achievement-search.module').then( m => m.AchievementSearchPageModule)
  },
  {
    path: 'achiever',
    loadChildren: () => import('./pages/achiever/achiever.module').then( m => m.AchieverPageModule)
  },
  {
    path: 'achievement',
    loadChildren: () => import('./pages/achievement-details/achievement-details.module').then( m => m.AchievementDetailsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
