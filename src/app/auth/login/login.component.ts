import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  error: string = null;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;

    this.authService.login(email, password).subscribe((token: string) => {
      localStorage.setItem('authToken', token);
      this.router.navigate(['flight']);
      this.isLoading = false;
      form.reset();
    },
    (errorMessage) => {
      this.error = errorMessage;
      form.controls['password'].reset()
      this.isLoading = false;
    });
  }
}
