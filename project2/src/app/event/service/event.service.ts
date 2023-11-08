import { Injectable } from '@angular/core';
import { Firestore, addDoc, deleteDoc, updateDoc, collection, getDoc, getDocs, doc, query, DocumentData, QueryDocumentSnapshot, docSnapshots, QuerySnapshot } from '@angular/fire/firestore';
import { EventM } from './events';
import { MessageService } from '../../shared/messages/message.service';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  private collectionRef: any ;

  constructor(public db : Firestore, private messageService : MessageService) { 
    this.collectionRef = collection(this.db, "events") ;
  }

  async createEvent(description: string, name: string) {
    const docRef = await addDoc(this.collectionRef, {
      description: description,
      name: name
    });
    this.messageService.add('Event Service: create successful :' + docRef.id );
    return docRef.id;
  }

   async getEvents()  {
    const q = query(this.collectionRef);
    const querySnapshot = await getDocs(q);
    const data = this.wrapReturnKeyMap(querySnapshot);
    this.messageService.add('Event Service: events fetched');
    return data;
   }

  //REM code from Michael 
  private wrapReturnKeyMap(querySnapshot: QuerySnapshot<unknown>) {
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as {}) }));
  }

  async getEvent(id: string)  {
    const docRef = doc(this.db, "events", id);
    const docSnap = await getDoc(docRef);
    this.messageService.add('Event Service: read successful :' + docRef.id );
    const eventData = docSnap.data();
    return eventData;
  } 

  async updateEvent(id: string, event: { description: string; name: string; }) {
    const docRef = doc(this.db, "events", id);
    await updateDoc(docRef, event);
    this.messageService.add('Event Service: update successful :' + docRef.id );
  }

  async deleteEvent(id: string) {
    const docRef = doc(this.db, "events", id);
    await deleteDoc(docRef);
    this.messageService.add('Event Service: deleted successful :' + docRef.id );
  }
   
}


