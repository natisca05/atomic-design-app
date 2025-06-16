import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user.model';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-users-grid',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  template: `
    <div class="users-grid-container">
      <div class="users-grid">
        <app-user-card
          *ngFor="let user of users; trackBy: trackByUserId"
          [user]="user"
          [isExpanded]="expandedUserId === user.id"
          (expand)="onUserExpand($event)"
          (collapse)="onUserCollapse()"
        ></app-user-card>
      </div>
      
      <div 
        *ngIf="expandedUserId !== null"
        class="overlay"
        (click)="onUserCollapse()"
      ></div>
    </div>
  `,
  styles: [`
    .users-grid-container {
      position: relative;
    }

    .users-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      padding: 2rem;
      max-width: 1400px;
      margin: 0 auto;
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 999;
      backdrop-filter: blur(4px);
    }

    @media (max-width: 1200px) {
      .users-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        padding: 1.5rem;
      }
    }

    @media (max-width: 768px) {
      .users-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
        padding: 1rem;
      }
    }

    @media (max-width: 480px) {
      .users-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 1rem;
      }
    }
  `]
})
export class UsersGridComponent {
  @Input() users: User[] = [];
  @Output() userExpand = new EventEmitter<User>();
  @Output() userCollapse = new EventEmitter<void>();

  expandedUserId: number | null = null;

  trackByUserId(index: number, user: User): number {
    return user.id;
  }

  onUserExpand(user: User) {
    this.expandedUserId = user.id;
    this.userExpand.emit(user);
  }

  onUserCollapse() {
    this.expandedUserId = null;
    this.userCollapse.emit();
  }
}