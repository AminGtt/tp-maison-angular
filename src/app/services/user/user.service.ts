import { Injectable } from '@angular/core';
import {User} from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor() {
    this.user = new User(
      'test user', 'test@test.test', 'test', 1
    );
  }

  editUser(newUser: User): Promise<void> {
  return new Promise<void>((res, rej) => {
      setTimeout(() => {
        this.user = newUser;
      }, 1000);
      res();
    });
  }

}
