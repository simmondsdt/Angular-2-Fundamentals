import { Component, Input } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
	selector: 'event-thumbnail',
	templateUrl: './event-thumbnail.component.html',
	styleUrls: [ '../styles/event-thumbnail.scss' ],
})

export class EventThumbnailComponent {
	@Input() event:IEvent;

	getStartTimeClass() {
		if (this.event && this.event.time === '8:00 am')
			return ['green', 'bold']
		return []
	}
}
