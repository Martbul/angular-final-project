import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateAppService } from '../create-app.service';

@Component({
  selector: 'app-create-app',
  templateUrl: './create-app.component.html',
  styleUrls: ['./create-app.component.css']
})
export class CreateAppComponent {

constructor(private createAppService: CreateAppService){

}


  handleFormSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const appData: { title: string; price: number; imgUrl:string; category:string; description:string ;_id:any} = form.value;


 this.createAppService.createApp(appData)

     form.setValue({ title: "", price: "", imgUrl: "", category: "",description: ""});
   
  }
}
