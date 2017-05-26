import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: [ '../styles/navbar.scss' ],
})

export class NavBarComponent {
  constructor(private auth:AuthService) {}
}
