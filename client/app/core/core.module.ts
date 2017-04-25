import { NgModule,CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// MATERIAL DESIGN MODULES
import { MaterialModule } from '@angular/material';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

// CORE COMPONENTS
import { AppToolbarComponent, AppSidenavComponent } from "./index";

// REDUX
import { NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';

import { HttpInterceptorModule } from "ng-http-interceptor";

// SERVICES
import {SessionActions, SessionEpics, MenuService, ToggleNavService, HttpInterceptableService } from './index';


@NgModule({
  imports: [
    NgReduxModule,
    RouterModule,
    NgReduxRouterModule,
    HttpInterceptorModule,
    Angular2FontAwesomeModule,
    MaterialModule.forRoot(),
    CommonModule
  ],
  declarations: [
    AppToolbarComponent,
    AppSidenavComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    SessionActions,
    SessionEpics,
    MenuService,
    ToggleNavService,
    HttpInterceptableService
  ], 
  exports: [ AppToolbarComponent, AppSidenavComponent ]
})
export class CoreModule {
  constructor( private httpInterceptableService: HttpInterceptableService ) {}
}
