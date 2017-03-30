import { Injectable } from '@angular/core';
import {MenuService} from '../core/services/menu.client.service';

@Injectable()
export class ArticlesConfig {
  constructor(private menuService : MenuService){

  }
  addMenu(){
    this.menuService.addMenuItem('sideNav',{
      state: '#/articles',
      title: 'Articles',
      icon: 'fa-file',
      roles: ['admin']
    })
  }
}
