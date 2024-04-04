import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateAppService } from '../create-app.service';
import { UserService } from '../../user/user-auth.service';
import { User } from 'src/app/types/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-app',
  templateUrl: './create-app.component.html',
  styleUrls: ['./create-app.component.css'],
})
export class CreateAppComponent {
  constructor(
    private createAppService: CreateAppService,
    private userAuthService: UserService,
    private router: Router
  ) {}
  appCreator!: any | undefined;
  appCreaotrEmail!: any;
  error?: string | null = null;

  handleFormSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    if (!form.value.title) {
      this.error = 'Title is required';
      console.log('title ir required');
      
      return;
    }

    if (!form.value.price) {
      this.error = 'Price is required';
      return;
    }

    if (!form.value.imgUrl) {
      this.error = 'Image is required';
      return;
    }

    if (!form.value.category) {
      this.error = 'Category is required';
      return;
    }

    if (!form.value.description) {
      this.error = 'Description is required';
      return;
    }

    this.appCreator = this.userAuthService.userFromLocaleStorage.username;
    this.appCreaotrEmail = this.userAuthService.userFromLocaleStorage.email;

    const appData: {
      title: string;
      price: string;
      imgUrl: string;
      category: string;
      description: string;
      _id: any;
      posted_at: any;
      likes: number;
      comments: object;
      creator: any;
      likedBy: string[];
      creatorEmail: string;
    } = form.value;
    appData.creator = this.appCreator;
    appData.creatorEmail = '';
    console.log(appData);

    this.createAppService.createApp(appData, this.appCreaotrEmail);

    form.setValue({
      title: '',
      price: '',
      imgUrl: '',
      category: '',
      description: '',
    });
    this.error = null
    this.router.navigate(['/thanks-posted-app'])
  }
}
