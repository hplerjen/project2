import { Injectable } from '@angular/core';
import { EventM, events } from './events';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  event: EventM | undefined;
  events: EventM[] | undefined;

  constructor() { }

  getEvent(id: number) {
    console.log("events loaded:" + events);
    this.event = events.find(
      (event) => event.id === id);
    return this.event;
  } 

  getEvents(){
    this.events = events;
    return events;
  }

}
