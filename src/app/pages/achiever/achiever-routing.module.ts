import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchieverPage } from './achiever.page';

const routes: Routes = [
  {
    path: ':achieverID',
    component: AchieverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchieverPageRoutingModule { }
