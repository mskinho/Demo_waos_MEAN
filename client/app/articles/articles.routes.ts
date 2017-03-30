import { RouterModule, Routes } from '@angular/router';
// APP COMPONENTS
import { ArticlesComponent } from './index';


const ARTICLESROUTES: Routes = [
     { path: 'articles', component: ArticlesComponent},
       // otherwise redirect to home
     ];

export const ARTICLES_ROUTES = RouterModule.forRoot(ARTICLESROUTES,{useHash: true});
