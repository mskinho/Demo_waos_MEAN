import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS

 import { HomeComponent } from './home/index';
 import { LoginComponent, RegisterComponent } from './users/index';
 import { AuthInterceptor } from './users/index';

const ROUTES: Routes = [
     { path: '', component: HomeComponent, canActivate: [AuthInterceptor]  },
     { path: '', component: HomeComponent },
     { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },

     // otherwise redirect to home
     { path: '**', redirectTo: '' }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES,{useHash: true});
