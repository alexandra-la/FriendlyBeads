import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BraceletMakerPage } from './bracelet-maker.page';

const routes: Routes = [
  {
    path: '',
    component: BraceletMakerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BraceletMakerPageRoutingModule {}
