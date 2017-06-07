import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TOASTR_TOKEN, Toastr } from '../common/toastr';

@Component({
	templateUrl: './profile.component.html',
	styleUrls: ['../styles/form-errors.scss'],
})

export class ProfileComponent implements OnInit {
	profileForm:FormGroup
	private firstName:FormControl
	private lastName:FormControl

	constructor(
		private router:Router,
		private authService:AuthService,
		@Inject(TOASTR_TOKEN) private toastr:Toastr,
	) {}

	ngOnInit() {
		this.firstName = new FormControl(
			this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
		this.lastName = new FormControl(
			this.authService.currentUser.lastName, Validators.required)
		
		this.profileForm = new FormGroup({
			firstName: this.firstName,
			lastName: this.lastName,
		})
	}

	validateFirstName() {
		return this.firstName.valid || this.firstName.touched
	}

	validateLastName() {
		return this.lastName.valid || this.lastName.touched
	}

	saveProfile(formValues) {
		if (this.profileForm.valid) {
			this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
			this.toastr.success('Profile Saved')
		}
	}

	cancel() {
		this.router.navigate(['events'])
	}
}
