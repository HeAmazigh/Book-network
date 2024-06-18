import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/services';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss',
})
export class ActivateAccountComponent {
  message: string = '';
  isOkay: boolean = true;
  isSubmitted: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  onCodeCompleted(code: string) {
    this.confirmAccount(code);
  }

  redirectTo() {
    this.router.navigate(['login']);
  }

  confirmAccount(code: string) {
    this.authService.confirm({ code }).subscribe({
      next: () => {
        this.message =
          'Your account has been successfully activated!\n Now you can prosed to login';
        this.isSubmitted = true;
        this.isOkay = true;
      },
      error: () => {
        this.message = 'Your code is expired or invalid!';
        this.isSubmitted = true;
        this.isOkay = false;
      },
    });
  }
}
