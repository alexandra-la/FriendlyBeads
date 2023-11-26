import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  goHome(){
    this.navCtrl.navigateForward('home')
  }
  ngOnInit() {
  }

}
