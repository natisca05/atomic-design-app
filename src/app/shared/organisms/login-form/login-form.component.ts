// src/app/shared/organisms/login-form/login-form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';

  submit() {
    console.log('Logging in with', this.username, this.password);
  }
}
