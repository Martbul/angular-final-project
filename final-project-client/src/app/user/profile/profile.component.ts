import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from '../user-auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private userAuthService: UserService, private router: Router) {
    this.profileUser = this.userAuthService.user
  }

  profileUser!: any;
  ngOnInit() {
 
  }
  // ngOnChanges(): void {
  //   this.profileUser = this.userAuthService.user;
  //   console.log(this.profileUser);
  // }

  async profileEdit(form: NgForm) {
    console.log(form.value);
    const currentEmail = this.profileUser.email;
    const {
      username,
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      city,
      aboutMe,
    } = form.value;

    await this.userAuthService.profileEdit(
      currentEmail,
      username,
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      city,
      aboutMe
    );

    this.profileUser = {
      username,
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      city,
      aboutMe,
    };

    // this.profileUser = this.userAuthService.user;
  }
}
