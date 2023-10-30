import { Component, OnInit } from '@angular/core';
import { EventFireBaseService } from '../event-fire-base.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent {
  public description! : string;
  public name! : string;

  constructor(public eventFireBaseService: EventFireBaseService, private router: Router){
  }

  addEvent(description: string, name: string){
    console.log("start firebase addEvent() - description : " + description + " name: " + name);
    const docRef = this.eventFireBaseService.createEvent(this.description, this.name);
    console.log("creation successful with docRef :" + docRef);
    this.router.navigate(['events']); 
  }

}
