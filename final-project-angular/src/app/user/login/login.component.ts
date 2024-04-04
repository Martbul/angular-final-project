import { UserService } from '../user-auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationComponent } from 'src/app/nav/navigatio/navigation.component';
import { EmailValidator } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NavigationComponent, EmailValidator],
})
export class LoginComponent {
  domains = EMAIL_DOMAINS
  error?: string | null = null;

  constructor(
    private userAuthService: UserService,
    private router: Router
  ) // private navComponent: NavigationComponent
  {}

  handleLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { email, password } = form.value;
    this.userAuthService.login(email, password).subscribe((user) => {
      console.log(user);

      //! pri logi i signup s nevalidni danni pak te redirectva
      //! tova e vremenno reshenie - popravi go!!!
      if (user === 'invalid username!!!!!!!!! or password') {
        this.error = user;
        return;
      }
      localStorage.setItem('auth', JSON.stringify(user));
      this.userAuthService.getProfile()
      // this.navComponent.changeNav()
      this.router.navigate(['/app-finder']);
    });
  }
}
