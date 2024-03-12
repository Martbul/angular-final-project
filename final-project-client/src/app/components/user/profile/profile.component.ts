import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private userAuthService: UserService, private router: Router) { }
  
  profileUser!: any
  ngOnInit(): void {
    this.profileUser = this.userAuthService.userFromLocaleStorage
  }
}
