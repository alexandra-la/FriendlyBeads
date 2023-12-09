import { Injectable } from '@angular/core';
import { Firestore, collection, doc, setDoc } from '@angular/fire/firestore';
import { Bracelet } from '../models/bracelet.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }
  createBracelet(bracelet: Bracelet): Promise<void> {
    const document = doc(collection(this.firestore, 'bracelets'));
    return setDoc(document, bracelet);
  }
}
