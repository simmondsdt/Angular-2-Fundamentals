import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { appRoutes } from './routes';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

import { TOASTR_TOKEN, Toastr } from './common/toastr';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { AuthService } from './user/auth.service';

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
	DurationPipe,
} from './events/index';

declare let toastr : Toastr

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
		EventRouteActivator,
		EventListResolver,
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
