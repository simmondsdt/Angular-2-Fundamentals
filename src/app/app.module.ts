import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { appRoutes } from './routes';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

import {
	JQ_TOKEN,
	TOASTR_TOKEN,
	Toastr,
	CollapsibleWellComponent,
	SimpleModalComponent,
	ModalTriggerDirective,
} from './common/index';

import {
	EventListComponent,
	EventThumbnailComponent,
	EventDetailsComponent,
	CreateEventComponent,
	EventService,
	EventRouteActivator,
	EventListResolver,
	CreateSessionComponent,
	SessionListComponent,
	UpvoteComponent,
	VoterService,
	DurationPipe,
} from './events/index';

declare let toastr : Toastr;
declare let jQuery : Object;

@NgModule({
	declarations: [
		AppComponent,
		NavBarComponent,
		Error404Component,
		EventListComponent,
		EventThumbnailComponent,
		EventDetailsComponent,
		CreateEventComponent,
		CreateSessionComponent,
		SessionListComponent,
		CollapsibleWellComponent,
		SimpleModalComponent,
		UpvoteComponent,
		ModalTriggerDirective,
		DurationPipe,
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes),
	],
	providers: [
		EventService,
		{ provide: TOASTR_TOKEN, useValue: toastr },
		{ provide: JQ_TOKEN, useValue: jQuery },
		EventRouteActivator,
		EventListResolver,
		VoterService,
		AuthService,
		{ provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
	],
	bootstrap: [
		AppComponent,
	]
})

export class AppModule {}

function checkDirtyState(component:CreateEventComponent) {
	if (component.isDirty)
		return window.confirm('You have not saved, do you really want to cancel?')
	return true
}
