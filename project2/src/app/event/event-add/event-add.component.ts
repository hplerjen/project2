import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent {
  public description! : string;
  public name! : string;

  constructor(public eventService: EventService, private router: Router){
  }

  async addEvent(description: string, name: string){
    console.log("start firebase addEvent() - description : " + description + " name: " + name);
    const docRef = await this.eventService.createEvent(this.description, this.name);
    console.log("creation successful with docRef :" + docRef);
    this.router.navigate(['events']); 
  }

}
