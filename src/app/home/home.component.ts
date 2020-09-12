import { Component } from '@angular/core';
import { User } from '@app/_models';
import { AuthService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  user: User;

  constructor(private authService: AuthService) {
    this.user = this.authService.userValue;
  }
}