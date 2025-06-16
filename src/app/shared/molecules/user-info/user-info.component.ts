import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="user-info">
      <h3 class="user-name">{{ firstName }} {{ lastName }}</h3>
      <p class="user-email">{{ email }}</p>
    </div>
  `,
  styles: [`
    .user-info {
      text-align: center;
      padding: 0 1rem;
    }

    .user-name {
      font-size: 1.125rem;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 0.5rem 0;
      line-height: 1.4;
    }

    .user-email {
      font-size: 0.875rem;
      color: #10b981;
      margin: 0;
      background: rgba(16, 185, 129, 0.1);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      display: inline-block;
      font-weight: 500;
    }
  `]
})
export class UserInfoComponent {
  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() email: string = '';
}