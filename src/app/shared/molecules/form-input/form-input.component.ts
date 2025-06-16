// src/app/shared/molecules/form-input/form-input.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent {
  @Input() label: string = '';
  @Input() value: string = '';
}
