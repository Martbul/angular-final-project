import { UserService } from './../user.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  // apps: App[] = [];
  constructor(private userService: UserService) {}

  // ngOnInit(): void {
  //   this.fetchApps();
  // }

  // fetchApps() {
  //   this.appService.getApps().subscribe((apps) => {
  //     this.apps = apps;
  //     console.log(this.apps);
  //   });
  // }

  handleFormSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const value: { email: string; password: string } = form.value;

    form.setValue({ email: "", password: "" });
    console.log(value);
  }
}
