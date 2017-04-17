import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { Auth } from './users';
import { HomeComponent } from "./home";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', loadChildren:'./users/users.module#UsersModule' },
  { path: 'articles', loadChildren:'./articles/articles.module#ArticlesModule' },

  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    Auth
  ]
})
export class AppRoutingModule { }
