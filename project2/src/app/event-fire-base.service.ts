import { Injectable } from '@angular/core';
import { Firestore, addDoc, deleteDoc, updateDoc, collection, getDoc, getDocs, doc, query, DocumentData, QueryDocumentSnapshot, docSnapshots, QuerySnapshot } from '@angular/fire/firestore';
import { EventM } from './events';

@Injectable({
  providedIn: 'root'
})

export class EventFireBaseService {

  private collectionRef: any ;

  constructor(public db : Firestore) { 
    this.collectionRef = collection(this.db, "events") ;
  }

  async createEvent(description: string, name: string) {
    console.log("start firebase createEvent() - description : " + description + " name: " + name);
    const docRef = await addDoc(this.collectionRef, {
      description: description,
      name: name
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  }

  async getEvents()  {
    const q = query(this.collectionRef);
    const querySnapshot = await getDocs(q);
    querySnapshot.docs.forEach((doc) => {console.log(doc.id, " => ", doc.data());
    });
    return querySnapshot.docs;
    //querySnapshot.docs.map(doc => doc.data());
   }

  async getEvent(id: string)  {
    const docRef = doc(this.db, "events", id);
    console.log("create docRef:" + docRef);
    const docSnap = await getDoc(docRef);
    console.log("document :" + docSnap);
    return docSnap.data;
  } 

  async updateEvent(id: string, event: { description: string; name: string; }) {
    const docRef = doc(this.db, "events", id);
    console.log("update docRef:" + docRef);
    const docSnap = await updateDoc(docRef, event);
    console.log("update docSnap:" + docSnap);
  }

  async deleteEvent(id: string) {
    const docRef = doc(this.db, "events", id);
    console.log("delete docRef:" + docRef);
    const docSnap = await deleteDoc(docRef);
    console.log("delete docSnap:" + docSnap);
  }
   
}


