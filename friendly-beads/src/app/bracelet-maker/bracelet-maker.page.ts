import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {getAuth, onAuthStateChanged} from '@angular/fire/auth';
import { getApp } from '@angular/fire/app';
import { addDoc, collection, getFirestore } from '@angular/fire/firestore';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';


@Component({
  selector: 'app-bracelet-maker',
  templateUrl: './bracelet-maker.page.html',
  styleUrls: ['./bracelet-maker.page.scss'],
})

export class BraceletMakerPage implements OnInit {

  createBraceletForm! : FormGroup;
  //auth = getAuth();
  //username = this.auth.currentUser;
  constructor( private router: Router, private navCtrl: NavController, private readonly loadingCtrl: LoadingController,
    private readonly alertCtrl: AlertController, formBuilder: FormBuilder, public Fauth: AngularFireAuth) {
      this.createBraceletForm = new FormGroup({
        'Name': new FormControl(''),
        'Description':  new FormControl(''),
        'Strands':  new FormControl(''),
        'Beads':   new FormControl(''),
        'Color1':  new FormControl(''),
        'Color2':  new FormControl(''),
        'Letters':  new FormControl(''),
        'Tags':  new FormControl('')
      })
     }

  goHome(){
    this.navCtrl.navigateForward('home')
  }

  ngOnInit(): void{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user || user!=null) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;

    // ...
    } else {
    // User is signed out
    // ...
      this.router.navigateByUrl('/signin')
    }
    });
  }
  createBracelet(): void{

    const firebaseApp = getApp("[DEFAULT]");
    const db = getFirestore(firebaseApp);
    const braceletCollection = collection(db, 'bracelets');
    addDoc(braceletCollection, this.createBraceletForm.value);
    this.navCtrl.navigateForward('account')
  }

}
