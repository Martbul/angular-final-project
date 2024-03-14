import { Component, Inject, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, take } from 'rxjs';
import { API_ERROR } from '../../shared/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  apiError$ = this.apiError.asObservable();

  constructor(
    @Inject(API_ERROR) private apiError: BehaviorSubject<Error | null>,
    private router: Router
  ) {
    this.apiError$.pipe(debounceTime(0), take(1)).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {}
}
