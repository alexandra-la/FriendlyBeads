import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchingPageRoutingModule } from './searching-routing.module';

import { SearchingPage } from './searching.page';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchingPageRoutingModule,
    AngularFireModule
  ],
  declarations: [SearchingPage]
})
export class SearchingPageModule {}
