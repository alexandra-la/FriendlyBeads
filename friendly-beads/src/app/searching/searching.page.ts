import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataManagerService } from '../data-manager.service';
import { AngularFireModule } from '@angular/fire/compat';
import { getApp } from '@angular/fire/app';
import { collection, getDocs, getFirestore, query, where } from '@angular/fire/firestore';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.page.html',
  styleUrls: ['./searching.page.scss'],
})
export class SearchingPage implements OnInit {
  braceletList = this.dataService.getBraceletList();

  constructor(private navCtrl: NavController, private dataService: DataManagerService) {
  }

  goHome(){
    this.navCtrl.navigateForward('home')
  }
  async filterList(evt: any){
    this.braceletList = this.dataService.filterList(evt);
  }

  ngOnInit() {

  }



}
