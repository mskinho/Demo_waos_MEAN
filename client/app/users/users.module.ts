import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL DESIGN MODULES
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {XHRBackend, Http, RequestOptions, HttpModule} from "@angular/http";

// LOGIN COMPONENTS
import { LoginComponent, RegisterComponent, SettingsComponent, ProfileComponent,
   PasswordComponent, UsersListComponent, EqualValidator} from './index';

// LOGIN ROUTES
import { USERS_ROUTES } from './index';

// LOGIN SERVICES
import { UsersConfig, UsersService, Auth, AuthInterceptor } from './index';
export function usersFactory(config: UsersConfig) {
  return () => config.addMenu() ;
}

@NgModule({
  imports: [
    USERS_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    ProfileComponent,
    PasswordComponent,
    EqualValidator,
    UsersListComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ UsersConfig, UsersService,
    { provide: APP_INITIALIZER, useFactory: usersFactory, deps: [UsersConfig], multi: true }
  ]
})
export class UsersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UsersModule,
      providers: [Auth, AuthInterceptor]
    };
  }

}
