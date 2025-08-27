import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Redirect } from './pages/redirect/redirect';
import { Links } from './pages/links/links';

export const routes: Routes = [
  {path: '', component: Home },
  {path:'short/:id',component:Redirect},
  {path:'links',component:Links}

];
