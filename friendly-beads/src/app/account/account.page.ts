import { Component, OnInit } from '@angular/core';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Bracelet } from '../models/bracelet.interface';
import { collection, getFirestore, query, where } from '@angular/fire/firestore';
import { getApp } from 'firebase/app';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
   firebaseApp = getApp();
   db = getFirestore(this.firebaseApp);
  constructor(private navCtrl: NavController, private router: Router,private loginS: LoginService) {}

  goHome(){
    this.navCtrl.navigateForward('home')
  }
  goToBraceletMaker(){
    this.loginS.changeRoute('bracelet')
    this.navCtrl.navigateForward('bracelet-maker')
  }


  ngOnInit() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;


      } else {
        this.router.navigateByUrl('/signin');
      }
    });
  }

}
