import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  userSignin(id: number) {
    this.router.navigate(['/dashboard', id]);
  }

  userSignout() {

  }
}