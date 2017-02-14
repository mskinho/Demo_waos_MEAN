import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// MATERIAL DESIGN MODULES
import { MaterialModule } from '@angular/material';
import 'hammerjs';

//  REDUX
import { NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';

//  ROUTING APP
import { APP_ROUTES } from './app.routes';

//  SERVICES 
import { UsersService, AuthInterceptor } from './users/index';
import {SessionActions} from './core/actions/session.actions';
import {SessionEpics} from './core/epics';

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
    NgReduxModule,
    NgReduxRouterModule,
    APP_ROUTES,
    MaterialModule.forRoot()
  ],
  providers: [
    AuthInterceptor,
    SessionActions,
    SessionEpics,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
