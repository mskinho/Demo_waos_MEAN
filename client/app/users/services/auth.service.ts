import { Injectable } from '@angular/core';
import { CanActivate }    from '@angular/router';
import { UsersService } from './users.service'
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../core/store';
@Injectable()
export class Auth implements CanActivate{
  userRoles = [];
  constructor(private usersService : UsersService, private ngRedux: NgRedux<IAppState>){
 
  }

  canActivate(route) {
    this.userRoles = JSON.parse(JSON.stringify(this.ngRedux.getState())).session.user.roles;
    if (route.data.roles.indexOf('*') !== -1) {
        return true;
      } else {
        if (!this.userRoles) {
          return false;
        }

        for (var userRoleIndex in this.userRoles) {
          if (this.userRoles.hasOwnProperty(userRoleIndex)) {
            for (var roleIndex in route.data.roles) {
              if (route.data.roles.hasOwnProperty(roleIndex) && route.data.roles[roleIndex] === this.userRoles[userRoleIndex]) {
                return true;
              }
            }
          }
        }
      }
      return false;
    }
}
