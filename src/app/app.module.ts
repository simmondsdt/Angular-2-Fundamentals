import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';

@NgModule({
	declarations: [
		AppComponent,
		EventListComponent,
		EventThumbnailComponent,
		NavBarComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
	],
	providers: [
		EventService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }
