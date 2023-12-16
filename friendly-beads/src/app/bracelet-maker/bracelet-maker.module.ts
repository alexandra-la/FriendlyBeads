import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BraceletMakerPageRoutingModule } from './bracelet-maker-routing.module';

import { BraceletMakerPage } from './bracelet-maker.page';
import { ReactiveFormsModule } from '@angular/forms';
import { FirestoreModule } from '@angular/fire/firestore';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BraceletMakerPageRoutingModule,
    ReactiveFormsModule,
    FirestoreModule
  ],
  declarations: [BraceletMakerPage]
})
export class BraceletMakerPageModule {}
