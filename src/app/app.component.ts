import { Component } from '@angular/core';

import { AuthService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  user: User;

  constructor(private authService: AuthService) {
    this.authService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.authService.logout();
  }
}