import { NgModule,CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import {TooltipPosition} from '@angular/material';
import { ArticlesComponent }    from './articles.component';
import { ArticlesConfig } from './index';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { platformBrowser } from '@angular/platform-browser';

// MATERIAL DESIGN MODULES
import { MaterialModule, OverlayContainer } from '@angular/material';
import { ARTICLES_ROUTES } from './index';

@NgModule({
  imports: [
    ARTICLES_ROUTES
  ],
  declarations: [
    ArticlesComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ ArticlesConfig, OverlayContainer,
  { provide: APP_INITIALIZER, useFactory: (config: ArticlesConfig) => () => config.addMenu(), deps: [ArticlesConfig], multi: true }
],

})
export class ArticlesModule {}
