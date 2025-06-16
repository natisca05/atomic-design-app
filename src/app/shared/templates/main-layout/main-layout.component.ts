import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="main-layout">
      <header class="header">
        <div class="header-content">
          <div class="logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#059669"/>
              <path d="M8 12h16M8 16h16M8 20h10" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <h1>FinanceUsers</h1>
          </div>
          <nav class="nav">
            <span class="nav-item active">Users</span>
            <span class="nav-item">Reports</span>
            <span class="nav-item">Settings</span>
          </nav>
        </div>
      </header>
      
      <main class="main-content">
        <ng-content></ng-content>
      </main>
      
      <footer class="footer">
        <p>&copy; 2025 FinanceUsers. All rights reserved.</p>
      </footer>
    </div>
  `,
  styles: [`
    .main-layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    }

    .header {
      background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
      border-bottom: 1px solid #e5e7eb;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .header-content {
      max-width: 1400px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .logo h1 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #059669;
      margin: 0;
    }

    .nav {
      display: flex;
      gap: 2rem;
    }

    .nav-item {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      font-weight: 500;
      color: #6b7280;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .nav-item:hover {
      color: #059669;
      background: rgba(5, 150, 105, 0.1);
    }

    .nav-item.active {
      color: #059669;
      background: rgba(5, 150, 105, 0.1);
    }

    .main-content {
      flex: 1;
      padding: 2rem 0;
    }

    .footer {
      background: #ffffff;
      border-top: 1px solid #e5e7eb;
      padding: 1rem 2rem;
      text-align: center;
    }

    .footer p {
      margin: 0;
      color: #6b7280;
      font-size: 0.875rem;
    }

    @media (max-width: 768px) {
      .header-content {
        padding: 1rem;
        flex-direction: column;
        gap: 1rem;
      }

      .nav {
        gap: 1rem;
      }

      .nav-item {
        padding: 0.5rem 0.75rem;
        font-size: 0.875rem;
      }

      .main-content {
        padding: 1rem 0;
      }

      .footer {
        padding: 1rem;
      }
    }
  `]
})
export class MainLayoutComponent {}