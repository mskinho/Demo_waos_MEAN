import { NgModule,CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import {TooltipPosition} from '@angular/material';
import { ArticlesComponent }    from './articles.component';
import { ArticlesConfig } from './index';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { platformBrowser } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// MATERIAL DESIGN MODULES
import { MaterialModule, OverlayContainer } from '@angular/material';
import { ARTICLES_ROUTES } from './index';
import { ArticleComponent } from './article/article.component';
import {ArticlesService} from './services/articles.service';
import { DetailsComponent } from './article/details/details.component';
export function articlesFactory(config: ArticlesConfig) {
  return () => config.addMenu() ;
}

@NgModule({
  imports: [
    ARTICLES_ROUTES,
    BrowserModule,
    MaterialModule

  ],
  declarations: [
    ArticlesComponent,
    ArticleComponent,
    DetailsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ ArticlesConfig, OverlayContainer,ArticlesService,
  { provide: APP_INITIALIZER, useFactory: articlesFactory, deps: [ArticlesConfig], multi: true }
],

})
export class ArticlesModule {}
