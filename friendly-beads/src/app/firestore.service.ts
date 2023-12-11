import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Bracelet } from './models/bracelet.interface';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private readonly firestore: Firestore) { }
  createBracelet(
    userEmail: string,
    name: string,
    description: string,
    strands: number,
    beadtype: string,
    colors: Array<string>,
    letters: string,
    tags: Array<string>,
  ) : Promise<any>{
    return addDoc(collection(this.firestore, "braceletList"), {
      //@ts-ignore
      id,
      userEmail,
      name,
      description,
      strands,
      beadtype,
      colors,
      letters,
      tags,
    });
  }
}
