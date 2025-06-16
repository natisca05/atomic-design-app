// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './atoms/button/button.component';
import { FormInputComponent } from './molecules/form-input/form-input.component';
import { LoginFormComponent } from './organisms/login-form/login-form.component';
import { AuthLayoutComponent } from './templates/auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    ButtonComponent,
    FormInputComponent,
    LoginFormComponent,
    AuthLayoutComponent,
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    FormInputComponent,
    LoginFormComponent,
    AuthLayoutComponent,
  ],
})
export class SharedModule {}
