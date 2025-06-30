import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: HomeComponent },
  { path: 'publications', component: HomeComponent },
  { path: 'cv', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];
