import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { appRoutes } from './routes';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

import { ToastrService } from './common/toastr.service';
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
} from './events/index'


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
		ToastrService,
		EventRouteActivator,
		EventListResolver,
		AuthService,
		{
			provide: 'canDeactivateCreateEvent',
			useValue: checkDirtyState
		}
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
