import { RouterModule, Routes } from '@angular/router';
// APP COMPONENTS
import { ArticlesComponent } from './index';
import { Auth } from '../users/services/auth.service'
const ARTICLESROUTES: Routes = [{
        path: 'articles',
        component: ArticlesComponent,
        canActivate: [Auth],
        data : {
          roles : ['admin']
        }
      }];

export const ARTICLES_ROUTES = RouterModule.forRoot(ARTICLESROUTES,{useHash: true});
