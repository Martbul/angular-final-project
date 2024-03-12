import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, catchError, filter, tap, throwError } from 'rxjs';
import { User } from 'src/app/types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<undefined | null| User>(undefined)
  user$ = this.user$$.asObservable().pipe(filter((val):val is User | null => val !== undefined))
  user:any| any = null;

  userFromLocaleStorage:any=null

 get isLoggedIn(){
return this.userFromLocaleStorage !== null;
  }
  subscription: Subscription
 

  constructor(private http:HttpClient) {
    this.subscription = this.user$.subscribe(user =>{
      this.user = user
    })
   }

  register(username:string, email:string, password:string){
    return this.http.post<any>('/api/users/singup',{username, email,password})
    .pipe(tap(user => this.user$$.next(user)));
  }

  
  login( email:string, password:string){
    return this.http.post<any>('/api/users/login',{ email,password})
    .pipe(tap(user => this.user$$.next(user)));
  }

  logout() {
    //! VEMENNO RESHENIE
    localStorage.clear();
    // return this.http
    //   .get<any>('/api/users/logout')
    //   .pipe(tap((user) => this.user$$.next(null)));
    
  }

  getProfile(){
    this.userFromLocaleStorage = JSON.parse(localStorage.getItem('auth') as any);
    if (this.userFromLocaleStorage ==null) {
      return throwError(() => ' ERRROR');
    }
    return this.http
      .post<any>('/api/users/profile', {
        email: this.userFromLocaleStorage.email,
      })
      .pipe(
        tap((user) => this.user$$.next(user)),
        catchError((err) => {
          this.user$$.next(null);
          return throwError(() => err);
        })
      );
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
    
  }
}
