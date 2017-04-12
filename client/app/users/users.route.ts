import { RouterModule, Routes } from '@angular/router';
// APP COMPONENTS
 import { SettingsComponent } from './settings/index';
 import { LoginComponent, RegisterComponent, ListComponent } from './index';
 import { Auth } from './services/auth.service';

const USERSROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canActivate: [Auth],
  data : {
    roles : ['user', 'admin']
  } },
  { path: 'settings/profile', component: SettingsComponent,canActivate: [Auth],
  data : {
    roles : ['user', 'admin']
  } },
  { path:'list-users', component: ListComponent, canActivate: [Auth],
  data : {
    roles : ['admin']
  }}];

export const USERS_ROUTES = RouterModule.forRoot(USERSROUTES,{useHash: true});
