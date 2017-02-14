import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionActions } from '../../core/actions';
import { select } from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {NgReduxRouter} from '@angular-redux/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    credentials: any = {};
    returnUrl: string;
    @select(['session', 'isLoading']) isLoading$: Observable<boolean>;
    @select(s => !!s.session.token) loggedIn$: Observable<boolean>;

    constructor(
        private route: ActivatedRoute,
        private ngReduxRouter: NgReduxRouter,
        private router: Router,
            private actions: SessionActions) { }

    ngOnInit() {
        // reset login status
        // this.actions.logoutUser();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.loggedIn$.subscribe(
                isLOggedIn => {
                    console.log('this.returnUrl:', this.returnUrl);
                    if(isLOggedIn)
                        this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.actions.logoutUser();
                });
    }

    login() {
        console.log('this.credentials:',this.credentials);

        this.actions.loginUser({usernameOrEmail: this.credentials.usernameOrEmail, password: this.credentials.password})

    }

}


