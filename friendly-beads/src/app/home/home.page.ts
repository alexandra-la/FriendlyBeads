import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController, private router: Router, private loginS: LoginService) {}

  goToSignIn(){
    this.navCtrl.navigateForward('signin')
    this.loginS.changeRoute('account')
  }
  goToBraceletMaker(){
    this.navCtrl.navigateForward('bracelet-maker')
    this.loginS.changeRoute('bracelet')
  }

  ngOnInit(): void{
  }
}
