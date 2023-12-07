import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {getAuth} from '@angular/fire/auth';
import { getApp } from '@angular/fire/app';
import { addDoc, collection, getFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-bracelet-maker',
  templateUrl: './bracelet-maker.page.html',
  styleUrls: ['./bracelet-maker.page.scss'],
})
export class BraceletMakerPage implements OnInit {
  createBraceletForm!: FormGroup;
  auth = getAuth();
  user = this.auth.currentUser;
  constructor( private router: Router) { }

  ngOnInit(): void{
    const user = localStorage.getItem('User')
    if(user==null){
      this.router.navigateByUrl('/signin')
    }
    this.createBraceletForm = new FormGroup({
      'Uemail': new FormControl(this.user, Validators.required),
      'Name': new FormControl('', Validators.required),
      'Description':  new FormControl('', Validators.required),
      'Strands':  new FormControl('', Validators.required),
      'Beads':   new FormControl('', Validators.required),
      'Colors':  new FormControl('', Validators.required),
      'Letters':  new FormControl('', Validators.required),
      'Tags':  new FormControl('', Validators.required)
    })
  }
  createBracelet(): void{
    const firebaseApp = getApp();
    const db = getFirestore(firebaseApp);
    const braceletCollection = collection(db, 'bracelets');
    addDoc(braceletCollection, this.createBraceletForm.value);
  }

}
