import { Injectable } from '@angular/core';
import { Bracelet } from './models/bracelet.interface';
import { Observable } from 'rxjs';
import { getApp } from '@angular/fire/app';
import { DocumentData, Firestore, FirestoreModule, collection, collectionData, deleteDoc, doc, getDocs, getFirestore, query, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  constructor() { }

  async getBraceletList(){
    const firebaseApp = getApp("[DEFAULT]");
    const db = getFirestore(firebaseApp);
    const querySnapshot = await getDocs(collection(db, "bracelets"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    })
    return querySnapshot.docs;
  }

  async filterList(evt: any){
    const firebaseApp = getApp("[DEFAULT]");
    const db = getFirestore(firebaseApp);
    const q = query(collection(db, "bracelets"), where("Name", "==", evt));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs;
  }

  async filterByUser(user:any){
    const firebaseApp = getApp("[DEFAULT]");
    const db = getFirestore(firebaseApp);
    const q = query(collection(db, "bracelets"), where("UserEmail", "==", user));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs;
  }

  async deleteDoc(name: any){
    console.log(name + "dataservice");
    const firebaseApp = getApp("[DEFAULT]");
    const db = getFirestore(firebaseApp);
    const q = query(collection(db, "bracelets"), where("Name", "==", name));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(function(doc) {
      deleteDoc(doc.ref);
    })
  }

}
