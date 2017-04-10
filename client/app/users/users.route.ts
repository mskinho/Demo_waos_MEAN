import { RouterModule, Routes } from '@angular/router';
// APP COMPONENTS
 import { SettingsComponent } from './settings/index';
 import { LoginComponent, RegisterComponent } from './index';

const USERSROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'settings/profile', component: SettingsComponent }];

export const USERS_ROUTES = RouterModule.forRoot(USERSROUTES,{useHash: true});
