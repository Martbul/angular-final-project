import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateAppService } from '../create-app.service';
import { UserService } from '../../user/user-auth.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-create-app',
  templateUrl: './create-app.component.html',
  styleUrls: ['./create-app.component.css']
})
export class CreateAppComponent {

constructor(private createAppService: CreateAppService, private userAuthService:UserService){

}
appCreator!: any|undefined

get user() {
  this.appCreator = this.userAuthService.user;
  return this.userAuthService.user;
}

  handleFormSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

     this.appCreator = this.user
    const appData: { title: string; price: string; imgUrl:string; category:string; description:string ;_id:any,posted_at:any, likes:number, comments:object,creator:any} = form.value;
    // appData.creator = this.appCreator 
    // console.log(appData);
    // console.log(this.userAuthService.user$);
    
    


 this.createAppService.createApp(appData)

     form.setValue({ title: "", price: "", imgUrl: "", category: "",description: ""});
   
  }
}
