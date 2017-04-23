import { RouterModule, Routes } from '@angular/router';
// APP COMPONENTS
 import { HomeComponent } from './index';


const HOMEROUTES: Routes = [
     { path: 'home', component: HomeComponent, data: { title : 'Home' } }];

export const HOME_ROUTES = RouterModule.forChild(HOMEROUTES);
