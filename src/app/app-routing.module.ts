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
  },  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'create-achievement',
    loadChildren: () => import('./pages/create-achievement/create-achievement.module').then( m => m.CreateAchievementPageModule)
  },
  {
    path: 'edit-achievement',
    loadChildren: () => import('./pages/edit-achievement/edit-achievement.module').then( m => m.EditAchievementPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
