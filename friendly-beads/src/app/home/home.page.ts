import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoginService } from '../login.service';
import { getApps } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
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
    this.loginS.changeRoute('bracelet')
    this.navCtrl.navigateForward('bracelet-maker')
  }
  goToSearch(){
    this.navCtrl.navigateForward('searching')
  }

  ngOnInit(): void{
    AngularFireModule.initializeApp(environment.firebase);
    console.log(getApps().length);
  }
}
