import { NgModule,CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER }       from '@angular/core';
import { HomeComponent }    from './index';
import { HomeConfig } from './index';

// MATERIAL DESIGN MODULES
import { MaterialModule, OverlayContainer } from '@angular/material';
import { HOME_ROUTES } from './index';

@NgModule({
  imports: [
    HOME_ROUTES,
    MaterialModule.forRoot()
  ],
  declarations: [
    HomeComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ HomeConfig, OverlayContainer,
  { provide: APP_INITIALIZER, useFactory: (config: HomeConfig) => () => config.addMenu(), deps: [HomeConfig], multi: true }
],

})
export class HomeModule {}
