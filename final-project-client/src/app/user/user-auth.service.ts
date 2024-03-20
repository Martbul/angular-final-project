import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  Subscription,
  catchError,
  filter,
  tap,
  throwError,
} from 'rxjs';
import { User } from 'src/app/types/user';


@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<undefined | null | User>(undefined);
  user$ = this.user$$
    .asObservable()
    .pipe(filter((val): val is User | null => val !== undefined));
  user: any | undefined;
  user2!: any;

  userFromLocaleStorage: any = null;

  get isLoggedIn() {
    return !!this.user;
  }
  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  register(username: string, email: string, password: string) {
    return this.http
      .post<any>('/api/users/singup', { username, email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    return this.http
      .post<any>('/api/users/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    //! VEMENNO RESHENIE
    localStorage.clear();
    this.user = undefined;
    // return this.http
    //   .get<any>('/api/users/logout')
    //   .pipe(tap((user) => this.user$$.next(null)));
  }

  getProfile() {
    this.userFromLocaleStorage = JSON.parse(
      localStorage.getItem('auth') as any
    );
    if (this.userFromLocaleStorage == null) {
      return throwError(() => ' ERRROR');
    }
    return this.http
      .post<any>('/api/users/profile', {
        email: this.userFromLocaleStorage.email,
      })
      .pipe(
        tap((user) => {
          this.user$$.next(user);
          console.log('hhhhere');

          console.log(user);
          this.user2 = user;
        }),
        catchError((err) => {
          this.user$$.next(null);
          return throwError(() => err);
        })
      );
  }

  editUserProfile(
    currentEmail: string,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    country: string,
    city: string,
    aboutMe: string
  ) {
    console.log(currentEmail);
    console.log(firstName);

    let dataForUserProfileUpdate = {
      currentEmail,
      username,
      firstName,
      lastName,
      phoneNumber,
      country,
      city,
      aboutMe,
    };
    console.log(dataForUserProfileUpdate);

    this.http
      .put<any>('http://localhost:5050/profile/edit', dataForUserProfileUpdate)
      .pipe(
        tap((user) => {
          this.user$$.next(user);
          console.log('hhhhere');

          console.log(user);
          this.user2 = user;
        }),
        catchError((err) => {
          this.user$$.next(null);
          return throwError(() => err);
        })
      )
      .subscribe(
        (data) => console.log('Success!', data),
        (error) => console.error('Error:', error)
      );

    this.getProfile().subscribe({
      next: (user) => {
        console.log(user);
      },
      error: (error) => {
        console.log('Error occurred:', error);
      },
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}

// export class UserService implements OnDestroy {
//   private user$$ = new BehaviorSubject<User | undefined>(undefined);
//   public user$ = this.user$$.asObservable();
//   userFromLocaleStorage: any = null;
//   user: User | undefined;
//   USER_KEY = '[user]';

//   get isLoggedIn(): boolean {
//     return !!this.user;
//   }

//   subscription: Subscription;

//   constructor(private http: HttpClient) {
//     this.subscription = this.user$.subscribe((user) => {
//       this.user = user;
//     });
//   }

//   login(email: string, password: string) {
//     return this.http
//       .post<User>('/api/users/login', { email, password })
//       .pipe(tap((user) => this.user$$.next(user)));
//   }

//   register(
//     username: string,
//     email: string,
//     password: string,
//     rePassword: string,
//     tel: string
//   ) {
//     return this.http
//       .post<User>('/api/register', {
//         username,
//         email,
//         password,
//         rePassword,
//         tel,
//       })
//       .pipe(tap((user) => this.user$$.next(user)));
//   }

//   logout() {
//     return this.http
//       .post<User>('/api/logout', {})
//       .pipe(tap(() => this.user$$.next(undefined)));
//   }

//   getProfile() {
//     return this.http
//       .get<User>('/api/users/profile')
//       .pipe(tap((user) => this.user$$.next(user)));
//   }

//   updateProfile(username: string, email: string, tel?: string) {
//     return this.http
//       .put<User>('/api/users/profile', { username, email, tel })
//       .pipe(tap((user) => this.user$$.next(user)));
//   }

//   ngOnDestroy(): void {
//     this.subscription.unsubscribe();

//     const getSum = (a: number, b: number) => {
//       return a + b;
//     }; // 1 + 1 = 2 // predictability
//   }
// }
