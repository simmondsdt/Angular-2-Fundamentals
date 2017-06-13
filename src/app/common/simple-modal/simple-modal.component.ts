import { Component, Input } from '@angular/core';

@Component({
	selector: 'simple-modal',
	templateUrl: './simple-modal.component.html',
	styleUrls: ['../../styles/simple-modal.scss'],
})

export class SimpleModalComponent {
	@Input() title: string;
	@Input() elementId: string;
}
