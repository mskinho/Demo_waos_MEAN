import { NgModule,CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER }       from '@angular/core';
import { UsersConfig } from './index';
import { LoginComponent } from './login/index';
import {RegisterComponent } from './register/index';
import {SettingsComponent} from './settings/index';
// MATERIAL DESIGN MODULES
import { MaterialModule, OverlayContainer } from '@angular/material';
import { USERS_ROUTES } from './index';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './settings/profile/profile.component';
import { PasswordComponent } from './settings/password/password.component';
import { EqualValidator } from './settings/password/equal-validator.directive';

@NgModule({
  imports: [
    USERS_ROUTES,
    MaterialModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    ProfileComponent,
    PasswordComponent,
    EqualValidator
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ UsersConfig, OverlayContainer],

})
export class UsersModule {}
