import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user: User;
  editUser: FormGroup;

  msg: string;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.userService.user;

    this.initForm();
  }

  private initForm(): void {
    this.editUser = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmitEditUser(): void {
    this.userService.editUser(this.user)
      .then(() => {
        this.msg = 'Modifications reussies!';

        setTimeout(() => {
          this.msg = undefined;
          this.router.navigate(['/profile']);
        }, 1500);
      });
  }

}
