import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-close-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      class="close-button"
      (click)="onClose($event)"
      aria-label="Close"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  `,
  styles: [`
    .close-button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(255, 255, 255, 0.9);
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      color: #6b7280;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .close-button:hover {
      background: #ffffff;
      color: #374151;
      transform: scale(1.1);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .close-button:active {
      transform: scale(0.95);
    }
  `]
})
export class CloseButtonComponent {
  @Output() close = new EventEmitter<MouseEvent>();

  onClose(event: MouseEvent) {
    this.close.emit(event);
  }
}