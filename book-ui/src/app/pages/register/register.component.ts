import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/services';
import { RegisterRequest } from '../../services/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}
  registerRequest: RegisterRequest = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  };

  errorsMsg: Array<string> = [];

  register() {
    this.errorsMsg = [];
    this.authService.register({ body: this.registerRequest }).subscribe({
      next: () => {
        this.router.navigate(['activate-account']);
      },
      error: (err) => {
        if (err.error.validationErrors) {
          this.errorsMsg = err.error.validationErrors;
        } else {
          this.errorsMsg.push(err.error.businessErrorDescription);
        }
      },
    });
  }

  login() {
    this.router.navigate(['login']);
  }
}
