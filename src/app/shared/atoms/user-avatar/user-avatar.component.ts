import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="avatar-container">
      <img 
        [src]="avatarUrl" 
        [alt]="altText"
        class="avatar"
        (error)="onImageError($event)"
      />
    </div>
  `,
  styles: [`
    .avatar-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 120px;
      margin-bottom: 1rem;
    }

    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid #f0f9ff;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .avatar:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }
  `]
})
export class UserAvatarComponent {
  @Input() avatarUrl: string = '';
  @Input() altText: string = 'User Avatar';

  onImageError(event: any) {
    event.target.src = 'https://via.placeholder.com/80x80/e5e7eb/6b7280?text=User';
  }
}