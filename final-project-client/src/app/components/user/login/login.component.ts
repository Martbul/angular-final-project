import { UserService } from '../user-auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error?:string | null= null


  constructor(private userAuthService: UserService, private router:Router) {}

  

  
handleLogin(form: NgForm){
if(form.invalid) {return}
const {email, password} =form.value
this.userAuthService.login(email, password)
.subscribe(user => {
console.log(user);

  this.userAuthService.user = user
  //! pri logi i signup s nevalidni danni pak te redirectva
  //! tova e vremenno reshenie - popravi go!!!
  if(user ==='invalid username!!!!!!!!! or password'){
    this.error = user
    return
  }
localStorage.setItem('auth', JSON.stringify(user))
this.router.navigate(['/app-finder'])
} )
}


}
