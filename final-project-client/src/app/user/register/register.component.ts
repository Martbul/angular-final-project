import { Component } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { UserService } from '../user-auth.service';
import { Router } from '@angular/router';
import { EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [EmailValidator],
})
export class RegisterComponent {
  domains = EMAIL_DOMAINS;
  error?: string | null = null;
  constructor(private userAuthService: UserService, private router: Router) {}
  handleSingUp(form: NgForm) {
    if (form.invalid) {
      return;
    }

    if (!form.value.username || form.value.username.length < 4) {
      this.error = 'The username must be at least 4 characters';
      return;
    }

    if (!form.value.email || !form.value.email.includes('@')) {
      this.error = 'Enter a valid email';
      return;
    }

    if (!form.value.password || form.value.password < 6) {
      this.error = 'The password should be at least 6 characters';
      return;
    }

    const { username, email, password } = form.value;
    this.userAuthService
      .register(username, email, password)
      .subscribe((user) => {
        console.log(user);

        localStorage.setItem('auth', JSON.stringify(user));
        this.router.navigate(['/']);
      });
  }
}
