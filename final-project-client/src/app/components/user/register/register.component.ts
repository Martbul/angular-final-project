import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userAuthService:UserService,
              private router:Router
    ){}
  handleSingUp(form: NgForm){
    if(form.invalid) {return}
    const {username, email, password} =form.value
    this.userAuthService.register(username, email, password)
    .subscribe(user => {
      console.log(user);
      localStorage.setItem('auth', JSON.stringify(user))
      
       this.userAuthService.user = user
       this.router.navigate(['/app-finder'])
    } )
  }
}
