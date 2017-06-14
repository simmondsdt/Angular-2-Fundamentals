import { Component, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { JQ_TOKEN } from '../jQuery.service';

@Component({
	selector: 'simple-modal',
	templateUrl: './simple-modal.component.html',
	styleUrls: ['../../styles/simple-modal.scss'],
})

export class SimpleModalComponent {
	@Input() title: string;
	@Input() elementId: string;
	@Input() closeOnBodyClick: string;
	@ViewChild('modalcontainer') containerEl: ElementRef;

	constructor(
		@Inject(JQ_TOKEN) private $: any,
	) {}

	closeModal() {
		if(this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
			this.$(this.containerEl.nativeElement).modal('hide');
		}
	}
}
