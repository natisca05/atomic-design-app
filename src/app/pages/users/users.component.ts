import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { MainLayoutComponent } from '../../shared/templates/main-layout/main-layout.component';
import { UsersGridComponent } from '../../shared/organisms/users-grid/users-grid.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MainLayoutComponent, UsersGridComponent],
  template: `
    <app-main-layout>
      <div class="users-page">
        <div class="page-header">
          <h2>Financial Team Members</h2>
          <p>Meet our dedicated financial professionals</p>
        </div>
        
        <div *ngIf="loading" class="loading-container">
          <div class="loading-spinner"></div>
          <p>Loading team members...</p>
        </div>
        
        <div *ngIf="error" class="error-container">
          <div class="error-icon">⚠️</div>
          <h3>Unable to load team members</h3>
          <p>{{ error }}</p>
          <button class="retry-button" (click)="loadUsers()">Try Again</button>
        </div>
        
        <app-users-grid
          *ngIf="!loading && !error"
          [users]="users"
          (userExpand)="onUserExpand($event)"
          (userCollapse)="onUserCollapse()"
        ></app-users-grid>
      </div>
    </app-main-layout>
  `,
  styles: [`
    .users-page {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .page-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .page-header h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0 0 1rem 0;
      background: linear-gradient(135deg, #059669 0%, #10b981 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .page-header p {
      font-size: 1.125rem;
      color: #6b7280;
      margin: 0;
    }

    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4rem 2rem;
      text-align: center;
    }

    .loading-spinner {
      width: 48px;
      height: 48px;
      border: 4px solid #e5e7eb;
      border-top: 4px solid #059669;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 1rem;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .loading-container p {
      color: #6b7280;
      font-size: 1.125rem;
      margin: 0;
    }

    .error-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4rem 2rem;
      text-align: center;
    }

    .error-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .error-container h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #dc2626;
      margin: 0 0 0.5rem 0;
    }

    .error-container p {
      color: #6b7280;
      margin: 0 0 2rem 0;
    }

    .retry-button {
      background: #059669;
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 0.5rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .retry-button:hover {
      background: #047857;
      transform: translateY(-1px);
    }

    @media (max-width: 768px) {
      .users-page {
        padding: 0 1rem;
      }

      .page-header h2 {
        font-size: 2rem;
      }

      .page-header p {
        font-size: 1rem;
      }
    }
  `]
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  loading = false;
  error: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.error = null;

    this.userService.getUsers().subscribe({
      next: (response) => {
        this.users = response.data.slice(0, 6); // Limit to 6 users as requested
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load team members. Please check your connection and try again.';
        this.loading = false;
        console.error('Error loading users:', error);
      }
    });
  }

  onUserExpand(user: User) {
    console.log('User expanded:', user);
  }

  onUserCollapse() {
    console.log('User card collapsed');
  }
}