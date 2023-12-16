import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataManagerService } from '../data-manager.service';
import { AngularFireModule } from '@angular/fire/compat';

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

  ngOnInit() {

  }



}
