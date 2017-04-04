import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// FONT AWESOME
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

// MATERIAL DESIGN MODULES
import { MaterialModule, OverlayContainer } from '@angular/material';
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
import {MenuService} from './core/services/menu.client.service';
import { Auth } from './users/services/auth.service'

//  COMPONENTS
import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/index';
import { LoginComponent, RegisterComponent } from './users/index';
import { AppSidenavComponent } from './app-sidenav/index';
import { HomeModule } from './home/index';
import { ArticlesModule } from './articles/index';


@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    LoginComponent,
    RegisterComponent,
    AppSidenavComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    NgReduxRouterModule,
    APP_ROUTES,
    HomeModule,
    ArticlesModule,
    Angular2FontAwesomeModule,
    MaterialModule.forRoot()
  ],
  providers: [
    OverlayContainer,
    AuthInterceptor,
    SessionActions,
    SessionEpics,
    MenuService,
    UsersService,
    Auth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
