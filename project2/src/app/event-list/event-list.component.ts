import { Component, OnInit } from '@angular/core';
import { EventM, events } from '../events';
import { EventFireBaseService } from '../event-fire-base.service';
import { DocumentData, QuerySnapshot } from '@angular/fire/firestore';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events : any;
  
  constructor(
    private eventService: EventFireBaseService,
  ) {}

  ngOnInit(): void {
    this.getEvents();
  }

  async getEvents() {
    //QuerySnapshot<DocumentData>;
    const querySnapshotDocs = await this.eventService.getEvents();
    console.log("getEvents from firebase:" + querySnapshotDocs);
    this.events = this.updateEventCollection(querySnapshotDocs);
    //this.events = querySnapshotDocs.map((doc:any) => doc.data());
    console.log("getEvents from firebase:" + this.events);
  }

  updateEventCollection(snapshot: any) {
    this.events = [];
    snapshot.forEach((event : any) => {
      this.events.push({ ...event.data(), id: event.id });
    })
  }

}
