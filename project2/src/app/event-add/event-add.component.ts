import { Component, OnInit } from '@angular/core';
import { EventFireBaseService } from '../event-fire-base.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent {
  id : number = 0;
  name: string = "INITIAL_VALUE";

  constructor(public eventFireBaseService: EventFireBaseService){
  }

  addEvent(id: number, name: string){
    console.log("start firebase addEvent() - number : " + id + " name: " + name);
    this.eventFireBaseService.createEvent(this.id, this.name);
  }
  
}
