import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EventM, events } from '../events';
import { EventFireBaseService } from '../event-fire-base.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: any;
  public description! : string;
  public name! : string;
  public id! : string;

  constructor(
    private route: ActivatedRoute,
    private eventFireBaseService: EventFireBaseService,
    private location: Location,
  ) {}

  ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      let eventIdFromRoute = routeParams.get('id') ;
      if (eventIdFromRoute != null){
      console.log("eventId from route:" + eventIdFromRoute);
      this.event = this.eventFireBaseService.getEvent(eventIdFromRoute)};
  }

  updateEvent(id: string, description: string , name: string){
    console.log("start firebase updateEvent() - description : " + description + " name: " + name);
    this.eventFireBaseService.updateEvent(id, {description, name});
  }

  deleteEvent(id: string){
    console.log("start firebase deleteEvent() - id: " + id);
    this.eventFireBaseService.deleteEvent(id);
  }

}
