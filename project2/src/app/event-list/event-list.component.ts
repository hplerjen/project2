import { Component, OnInit } from '@angular/core';
import { EventM, events } from '../events';
import { EventService } from '../event.service';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: EventM[] | undefined;
  
  constructor(
    private eventService: EventService,
  ) {}
  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(){
    this.events = this.eventService.getEvents();
  }

}
