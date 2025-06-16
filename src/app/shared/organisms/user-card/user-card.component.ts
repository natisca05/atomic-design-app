import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user.model';
import { UserAvatarComponent } from '../../atoms/user-avatar/user-avatar.component';
import { UserInfoComponent } from '../../molecules/user-info/user-info.component';
import { CloseButtonComponent } from '../../atoms/close-button/close-button.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, UserAvatarComponent, UserInfoComponent, CloseButtonComponent],
  template: `
    <div 
      class="user-card"
      [class.expanded]="isExpanded"
      (click)="onCardClick()"
    >
      <app-close-button 
        *ngIf="isExpanded"
        (close)="onClose($event)"
      ></app-close-button>
      
      <app-user-avatar
        [avatarUrl]="user.avatar"
        [altText]="user.first_name + ' ' + user.last_name"
      ></app-user-avatar>
      
      <app-user-info
        [firstName]="user.first_name"
        [lastName]="user.last_name"
        [email]="user.email"
      ></app-user-info>

      <div *ngIf="isExpanded" class="expanded-content">
        <div class="user-details">
          <div class="detail-item">
            <span class="detail-label">ID:</span>
            <span class="detail-value">{{ user.id }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Full Name:</span>
            <span class="detail-value">{{ user.first_name }} {{ user.last_name }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Email:</span>
            <span class="detail-value">{{ user.email }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .user-card {
      background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
      border-radius: 1rem;
      padding: 1.5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      position: relative;
      border: 1px solid #e5e7eb;
      height: fit-content;
    }

    .user-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      border-color: #d1d5db;
    }

    .user-card.expanded {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000;
      width: 90%;
      max-width: 500px;
      max-height: 80vh;
      overflow-y: auto;
      cursor: default;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      border: 1px solid #d1d5db;
    }

    .expanded-content {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid #e5e7eb;
    }

    .user-details {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .detail-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem;
      background: #f9fafb;
      border-radius: 0.5rem;
      border: 1px solid #f3f4f6;
    }

    .detail-label {
      font-weight: 600;
      color: #374151;
      font-size: 0.875rem;
    }

    .detail-value {
      color: #6b7280;
      font-size: 0.875rem;
      text-align: right;
    }

    @media (max-width: 768px) {
      .user-card.expanded {
        width: 95%;
        max-height: 85vh;
      }
    }
  `]
})
export class UserCardComponent {
  @Input() user!: User;
  @Input() isExpanded: boolean = false;
  @Output() expand = new EventEmitter<User>();
  @Output() collapse = new EventEmitter<void>();

  onCardClick() {
    if (!this.isExpanded) {
      this.expand.emit(this.user);
    }
  }

  onClose(event: Event) {
    event.stopPropagation();
    this.collapse.emit();
  }
}