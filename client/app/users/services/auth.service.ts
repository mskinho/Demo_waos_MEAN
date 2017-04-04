import { Injectable } from '@angular/core';
import { CanActivate }    from '@angular/router';
import { UsersService } from './users.service'

@Injectable()
export class Auth implements CanActivate{
  constructor(private usersService : UsersService) {  }
  currentUser = this.usersService.Auth();
  userRoles = this.currentUser?this.currentUser.roles : null;
  canActivate(route) {
      console.log('AuthGuard#canActivate called');
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
