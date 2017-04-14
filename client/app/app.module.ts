import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// FONT AWESOME
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

// MATERIAL DESIGN MODULES
import { MaterialModule, OverlayContainer } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import 'hammerjs';

//  REDUX
import { NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';

//  ROUTING APP
import { APP_ROUTES } from './app.routes';

//  SERVICES
import {SessionActions} from './core/actions/session.actions';
import {SessionEpics} from './core/epics';
import {MenuService} from './core/services/menu.client.service';

//  COMPONENTS
import { AppComponent, 
  AppSidenavComponent, 
  AppToolbarComponent } from "./index";

import { HomeModule } from './home/index';
import { ArticlesModule } from './articles/index';
import { UsersModule } from "./users";

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    AppSidenavComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    NgReduxRouterModule,
    APP_ROUTES,
    UsersModule.forRoot(),
    HomeModule,
    ArticlesModule,
    Angular2FontAwesomeModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule, 
    BrowserModule
  ],
  providers: [
    OverlayContainer,
    SessionActions,
    SessionEpics,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
