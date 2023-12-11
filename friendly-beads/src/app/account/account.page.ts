import { Component, OnInit } from '@angular/core';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Bracelet } from '../models/bracelet.interface';
import { collection, getFirestore, query, where } from '@angular/fire/firestore';
import { getApp } from 'firebase/app';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
   firebaseApp = getApp();
   db = getFirestore(this.firebaseApp);
  constructor(private navCtrl: NavController, private router: Router,) {}

  goHome(){
    this.navCtrl.navigateForward('home')
  }


  ngOnInit() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    const list = query(collection(this.db, "bracelets"), where("User", "==", uid))
      } else {
        this.router.navigateByUrl('/signin')
      }
    });
  }

}
