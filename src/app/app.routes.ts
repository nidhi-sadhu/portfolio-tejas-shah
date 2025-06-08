import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from '../test.component';

export const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'home', component: TestComponent },
  { path: '**', redirectTo: '' },
];
