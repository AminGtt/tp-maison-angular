import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitLogin(form: NgForm): void {
    this.authService.login(form.value.mail, form.value.password)
      .then(() => {
        this.router.navigate(['/offers']);
      })
      .catch((errorMsg) => {
        this.errorMsg = errorMsg;
        setTimeout(() => {
          this.errorMsg = undefined;
        }, 1500);
      });
  }

}
