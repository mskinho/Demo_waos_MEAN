import { RouterModule, Routes } from '@angular/router';
// APP COMPONENTS
import { ArticlesComponent } from './index';
import { ArticleComponent } from './article/index';
import { Auth } from '../users/services/auth.service';
import {DetailsComponent} from './article/details/details.component';
const ARTICLESROUTES: Routes = [{
        path: 'list-articles',
        component: ArticlesComponent,
        canActivate: [Auth],
        data : {
          roles : ['user']
        }
      },{
        path: 'list-articles/article/:id',
        component: DetailsComponent,
        canActivate: [Auth],
        data : {
          roles : ['user']
        }
      }
    ];

export const ARTICLES_ROUTES = RouterModule.forRoot(ARTICLESROUTES,{useHash: true});
