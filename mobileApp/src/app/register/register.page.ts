import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  register() {
    if (this.password === this.confirmPassword) {
      alert('Registration successful!');
      this.router.navigate(['/login']);
    } else {
      alert('Passwords do not match');
    }
  }
}
