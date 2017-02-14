import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { select } from '@angular-redux/store';

@Injectable()
export class AuthInterceptor implements CanActivate {
    @select(s => !!s.session.token) loggedIn$: Observable<boolean>;

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        return this.loggedIn$.map(x => {
            if (x) {
                // logged in so return true
                return true;
            }
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;
        }, 
        e => {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;
        });
    }
}