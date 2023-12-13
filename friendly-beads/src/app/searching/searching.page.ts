import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.page.html',
  styleUrls: ['./searching.page.scss'],
})
export class SearchingPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  goHome(){
    this.navCtrl.navigateForward('home')
  }

  ngOnInit() {
  }

}
