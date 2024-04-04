import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private router: Router, private userAuthService: UserService) {

    //! VEMENNO RESHENIE
    this.userAuthService.logout();
    this.router.navigate(['/']);

    
  // this.userAuthService.logout().subscribe({
  //   next: () => {
  //       console.log('I am in logout');
  //     localStorage.clear()
   
  //     this.router.navigate(['/']);

  //   },
  //   error:()=>{
      
  //     this.router.navigate(['/login']);

  //   },
  // })
}
  
}
