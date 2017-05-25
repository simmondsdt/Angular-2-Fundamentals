import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
	templateUrl: './event-details.component.html',
	styleUrls: ['./event-details.scss'],
})

export class EventDetailsComponent {
	event:any

	constructor(private eventService:EventService) {}

	ngOnInit() {
		this.event = this.eventService.getEvent(1)
	}
}