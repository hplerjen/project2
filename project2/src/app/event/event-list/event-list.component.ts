import { Component, OnInit } from '@angular/core';
import { EventM, events } from '../service/events';
import { EventService } from '../service/event.service';
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
    //FIXME error handling
    this.events = await this.eventService.getEvents();
  }

  //REM helper method for testing purposes
  /* updateEventCollection(snapshot: any) {
    this.events = [];
    snapshot.forEach((event : any) => {
      this.events.push({ ...event.data, id: event.id });
    })
  } */

}
