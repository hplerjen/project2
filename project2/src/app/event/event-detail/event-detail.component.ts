import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EventM } from '../service/events';
import { EventService } from '../service/event.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  public eventM! : EventM | any | undefined;
  public description! : string;
  public name! : string;
  public id! : string;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
      const routeParams = this.route.snapshot.paramMap;
      let eventIdFromRoute = routeParams.get('id') ;
      if (eventIdFromRoute!){
        console.log("eventId from route:" + eventIdFromRoute);
        const snap1 = await this.eventService.getEvent(eventIdFromRoute);
        this.eventM = snap1;
        if (this.eventM!){
          this.name = this.eventM.name;
          this.description = this.eventM.description;
          this.id = eventIdFromRoute;
        }

      }
  }

  updateEvent(id: string, description: string , name: string){
    console.log("start firebase updateEvent() - description : " + description + " name: " + name);
    this.eventService.updateEvent(id, {description, name});
  }

  deleteEvent(id: string){
    console.log("start firebase deleteEvent() - id: " + id);
    this.eventService.deleteEvent(id);
    this.router.navigate(['events']); 
  }

}
