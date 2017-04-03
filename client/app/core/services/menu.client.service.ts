import { Injectable } from '@angular/core';
@Injectable()
export class MenuService {
  constructor() {
    this.addMenu('sideNav', {
        roles: ['*']
      });
  }
  menus= {};
  defaultRoles =  ['user', 'admin'];
  ngOnInit(){
  }
  private shouldRender(userRoles, itemMenuRoles) {
    if (itemMenuRoles.indexOf('*') !== -1) {
      return true;
    } else {
      if (!userRoles) {
        return false;
      }

      for (var userRoleIndex in userRoles) {
        if (userRoles.hasOwnProperty(userRoleIndex)) {
          for (var roleIndex in itemMenuRoles) {
            if (itemMenuRoles.hasOwnProperty(roleIndex) && itemMenuRoles[roleIndex] === userRoles[userRoleIndex]) {
              return true;
            }
          }
        }
      }
    }

    return false;
  };
  addMenu(menuId, options){
    options = options || {};
      // Create the new menu
      this.menus[menuId] = {
        roles: options.roles || this.defaultRoles,
        items: options.items || [],
      };

      // Return the menu object
      return this.menus[menuId];
  };
  addMenuItem(menuId, options){
    options = options || {};
    this.validateMenuExistence(menuId);
    if(this.validateMenuItemExistence(options.state, menuId)){
      this.menus[menuId].items.push({
        title: options.title || '',
        state: options.state || '',
        icon : options.icon ||'',
        type: options.type || 'item',
        class: options.class,
        roles: ((options.roles === null || typeof options.roles === 'undefined') ? this.defaultRoles : options.roles),
        position: options.position || 0,
        items: [],
        shouldRender: this.shouldRender
      });
    }
    return this.menus[menuId];
  };
  addSubMenuItem(){};
  getMenu(menuId){
    this.validateMenuExistence(menuId);
      // Return the menu object
      return this.menus[menuId];
  };
  removeMenu(){}
  removeMenuItem(){};
  removeSubMenuItem(){}
  validateMenuExistence(menuId){
    if (menuId && menuId.length) {
      if (this.menus[menuId]) {
        return true;
      } else {
        throw new Error('Menu does not exist');
      }
    } else {
      throw new Error('MenuId was not provided');
    }
  }
  validateMenuItemExistence(state, menuId){
    for(var item in this.menus[menuId].items ){
      if(this.menus[menuId].items[item].state === state)
      return false;
    }
    return true;
  }
}
