import { Component } from '@angular/core';
import { AuthRequest } from '../../services/models';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/services';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authRequest: AuthRequest = { email: '', password: '' };
  errorsMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService
  ) {}

  login() {
    this.errorsMsg = [];
    this.authService.authenticate({ body: this.authRequest }).subscribe({
      next: (res) => {
        this.tokenService.token = res.token as string;
        this.router.navigate(['books']);
      },
      error: (err) => {
        // console.log(err);
        if (err.error.validationErrors) {
          this.errorsMsg = err.error.validationErrors;
        } else {
          this.errorsMsg.push(err.error.error);
        }
      },
    });
  }
  register() {
    this.router.navigate(['register']);
  }
}
