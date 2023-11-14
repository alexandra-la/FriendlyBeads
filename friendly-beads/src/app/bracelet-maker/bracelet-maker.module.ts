import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BraceletMakerPageRoutingModule } from './bracelet-maker-routing.module';

import { BraceletMakerPage } from './bracelet-maker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BraceletMakerPageRoutingModule
  ],
  declarations: [BraceletMakerPage]
})
export class BraceletMakerPageModule {}
