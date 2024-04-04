import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
     this.userAuthService.getProfile().subscribe({
       next: (user) => {
         console.log(user);
       },
       error: (error) => {
         console.log('Error occurred:', error);
       },
     });
     this.profileUser = this.userAuthService.user!;
     this.appsBought = this.userAuthService.user!.appsBought;
  }

  profileUser!: any;
  appsBought!: any;
  ngOnInit() {
    this.userAuthService.getProfile().subscribe({
      next: (user) => {
        console.log(user);
      },
      error: (error) => {
        console.log('Error occurred:', error);
      },
    });
    this.profileUser = this.userAuthService.user!;
    this.appsBought = this.userAuthService.user!.appsBought;

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.userAuthService.getProfile().subscribe({
      next: (user) => {
        console.log(user);
      },
      error: (error) => {
        console.log('Error occurred:', error);
      },
    });
    this.profileUser = this.userAuthService.user!;
        this.appsBought = this.userAuthService.user!.appsBought;
  }

  async profileEdit(form: NgForm) {
    console.log(form.value);
    const currentEmail = this.profileUser.email;
    const {
      username,
      firstname,
      lastName,
      email,
      phoneNumber,
      country,
      city,
      aboutMe,
    } = form.value;


    await this.userAuthService.editUserProfile(
      currentEmail,
      username,
      firstname,
      lastName,
      email,
      phoneNumber,
      country,
      city,
      aboutMe
    );

    this.userAuthService.getProfile().subscribe({
      next: (user) => {
        console.log(user);
      },
      error: (error) => {
        console.log('Error occurred:', error);
      },
    });
    this.profileUser = this.userAuthService.user!;
        this.appsBought = this.userAuthService.user!.appsBought;

   
  }
}
