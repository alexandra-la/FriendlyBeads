import { Injectable } from '@angular/core';
import { Bracelet } from './models/bracelet.interface';
import { Observable } from 'rxjs';
import { getApp } from '@angular/fire/app';
import { DocumentData, Firestore, FirestoreModule, collection, collectionData, getDocs, getFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  constructor() { }

  async getBraceletList(){
    const firebaseApp = getApp("[DEFAULT]");
    const db = getFirestore(firebaseApp);
    const querySnapshot = await getDocs(collection(db, "bracelets"));
    const designs: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      designs.push(doc.data());
      console.log(doc.data());
    })
    return querySnapshot.docs;
  }


}
