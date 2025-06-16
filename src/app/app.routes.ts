import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: '/users' }
];