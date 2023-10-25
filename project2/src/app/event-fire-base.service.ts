import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventFireBaseService {
  

  constructor(public db : Firestore) { 
  }
  async createEvent(id: number, name: string) {
    console.log("start firebase createEvent() - number : " + id + " name: " + name);
    const docRef = await addDoc(collection(this.db, 'events'), {
      id: id,
      name: name
    });
    console.log("Document written with ID: ", docRef.id);
  }
}
