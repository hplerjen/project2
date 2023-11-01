import { Component, OnInit } from '@angular/core';
import { EventM, events } from '../events';
import { EventService } from '../event.service';
import { DocumentData, QuerySnapshot } from '@angular/fire/firestore';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events : any;
  
  constructor(
    private eventService: EventService,
  ) {}

  ngOnInit(): void {
    this.getEvents();
  }

  async getEvents() {
    //QuerySnapshot<DocumentData>;
    this.events = await this.eventService.getEvents();
    //this.events = querySnapshotDocs.map((doc:any) => doc.data());
    console.log("getEvents from firebase:" + this.events);
  }

  /* updateEventCollection(snapshot: any) {
    this.events = [];
    snapshot.forEach((event : any) => {
      this.events.push({ ...event.data, id: event.id });
    })
  } */

}
