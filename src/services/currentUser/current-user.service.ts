import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor() { 

  }
  currentUser: string | any = null

  setCurrentUser(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));

  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }
}