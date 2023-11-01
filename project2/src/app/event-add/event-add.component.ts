import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent {
  public description! : string;
  public name! : string;

  constructor(public eventFireBaseService: EventService, private router: Router){
  }

  async addEvent(description: string, name: string){
    console.log("start firebase addEvent() - description : " + description + " name: " + name);
    const docRef = await this.eventFireBaseService.createEvent(this.description, this.name);
    console.log("creation successful with docRef :" + docRef);
    this.router.navigate(['events']); 
  }

}
