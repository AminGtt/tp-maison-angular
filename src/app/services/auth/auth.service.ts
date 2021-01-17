import { Injectable } from '@angular/core';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isConnected: boolean;

  constructor(private userService: UserService) { }

  login(mail: string, password: string): Promise<void|string> {
    return new Promise<void|string>((res, rej) => {

      setTimeout(() => {
        if (mail === this.userService.user.mail && password === this.userService.user.password) {
          this.isConnected = true;
          res();
        } else {
          rej('Les identifiants de connexion ne sont pas correct');
        }

      }, 1000);

    });
  }

  logout(): Promise<void> {
    return new Promise<void>((res, rej) => {
      this.isConnected = false;
      res();
    });
  }
}
