import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
	templateUrl: './login.component.html',
	styleUrls: ['../styles/form-errors.scss'],
})

export class LoginComponent{
	loginInvalid = false;

	constructor(
		private authService:AuthService,
		private router:Router,
	) {}

	login(formValues) {
		this.authService.loginUser(formValues.userName, formValues.password).subscribe(resp => {
			if(!resp) {
				this.loginInvalid = true;
			} else {
				this.router.navigate(['events'])
			}
		});
	}

	cancel() {
		this.router.navigate(['events'])
	}
}