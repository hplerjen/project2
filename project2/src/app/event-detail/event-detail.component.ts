import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EventService } from '../event.service';
import { EventM, events } from '../events';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: EventM | undefined;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location,
  ) {}

  ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      const eventIdFromRoute = Number(routeParams.get('id'));
      console.log("eventId from route:" + eventIdFromRoute);
      this.event = this.eventService.getEvent(eventIdFromRoute);
  }

  

}
