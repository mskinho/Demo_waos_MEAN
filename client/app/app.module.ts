import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// MATERIAL DESIGN MODULES
import { MaterialModule } from '@angular/material';
import 'hammerjs';

//  ROUTING APP
import { APP_ROUTES } from './app.routes';

//  SERVICES 
import { AuthenticationService, UsersService, AuthInterceptor } from './users/index';

//  COMPONENTS
import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/index';
import { LoginComponent, RegisterComponent } from './users/index';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES,
    MaterialModule.forRoot()
  ],
  providers: [
    AuthInterceptor,
    AuthenticationService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
