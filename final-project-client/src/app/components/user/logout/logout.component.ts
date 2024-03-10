import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
constructor(private router:Router, private userAuthService: UserService){
  this.userAuthService.logout().subscribe({
    next:()=>{
      localStorage.clear()
      this.userAuthService.user = null
      this.router.navigate(['/']);

    },
    error:()=>{
      this.userAuthService.user = null
      this.router.navigate(['/login']);

    },
  })
}
  
}
