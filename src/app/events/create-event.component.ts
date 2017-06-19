import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/event.service';

@Component({
	templateUrl: './create-events.component.html',
	styleUrls: ['../styles/form-errors.scss'],
})

export class CreateEventComponent {
	isDirty:boolean = true
	
	constructor(
		private router:Router,
		private eventService:EventService,
	) {}

	saveEvent(formValues) {
		this.eventService.saveEvent(formValues).subscribe(event => {
			this.router.navigate(['/events'])
			this.isDirty = false
		})
	}

	cancel() {
		this.router.navigate(['/events'])
	}
}