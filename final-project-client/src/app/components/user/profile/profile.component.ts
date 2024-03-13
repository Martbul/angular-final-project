import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from '../user-auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnChanges {
  constructor(private userAuthService: UserService, private router: Router) {
  
  }

  profileUser!: any;
  ngOnInit() {
    this.profileUser = this.userAuthService.user;
    console.log(this.profileUser);
  }
  ngOnChanges(): void {
    this.profileUser = this.userAuthService.user;
    console.log(this.profileUser);
  }

  profileEdit(form: NgForm) {
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


    this.userAuthService
      .profileEdit(
        currentEmail,
        username,
        firstName,
        lastName,
        email,
        phoneNumber,
        country,
        city,
        aboutMe
      )
      .subscribe((user: any) => {
        console.log(user);
      });

   // this.profileUser = this.userAuthService.user;
  }
}
