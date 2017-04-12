import { Injectable } from '@angular/core';
import {MenuService} from '../core/services/menu.client.service';

@Injectable()
export class ArticlesConfig {
  constructor(private menuService : MenuService){
  }
  addMenu(){
    this.menuService.addMenuItem('sideNav',{
      state: '#/list-articles',
      title: 'Articles',
      icon: 'fa-file',
      roles: ['user', 'admin'],
    })
  }
}
