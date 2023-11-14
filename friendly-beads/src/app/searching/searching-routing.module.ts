import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchingPage } from './searching.page';

const routes: Routes = [
  {
    path: '',
    component: SearchingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchingPageRoutingModule {}
