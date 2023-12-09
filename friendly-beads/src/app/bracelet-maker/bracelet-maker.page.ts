import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {getAuth, onAuthStateChanged} from '@angular/fire/auth';
import { getApp } from '@angular/fire/app';
import { addDoc, collection, getFirestore } from '@angular/fire/firestore';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-bracelet-maker',
  templateUrl: './bracelet-maker.page.html',
  styleUrls: ['./bracelet-maker.page.scss'],
})
export class BraceletMakerPage implements OnInit {
  createBraceletForm! : FormGroup;
  auth = getAuth();
  username = this.auth.currentUser;
  constructor( private router: Router, private navCtrl: NavController, private readonly loadingCtrl: LoadingController,
    private readonly alertCtrl: AlertController, formBuilder: FormBuilder, public Fauth: AngularFireAuth) { }

  goHome(){
    this.navCtrl.navigateForward('home')
  }

  ngOnInit(): void{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
    // ...
    this.createBraceletForm = new FormGroup({
      'User': new FormControl(uid, Validators.required),
      'Name': new FormControl('', Validators.required),
      'Description':  new FormControl('', Validators.required),
      'Strands':  new FormControl('', Validators.required),
      'Beads':   new FormControl('', Validators.required),
      'Color1':  new FormControl('', Validators.required),
      'Color2':  new FormControl('', Validators.required),
      'Letters':  new FormControl('', Validators.required),
      'Tags':  new FormControl('', Validators.required)
    })
    } else {
    // User is signed out
    // ...
      this.router.navigateByUrl('/signin')
    }
    });
  }
  createBracelet(): void{
    const firebaseApp = getApp();
    const db = getFirestore(firebaseApp);
    const braceletCollection = collection(db, 'bracelets');
    addDoc(braceletCollection, this.createBraceletForm.value);
    this.navCtrl.navigateForward('account')
  }

}
