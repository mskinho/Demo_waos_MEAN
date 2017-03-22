var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionActions } from '../../core/actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { NgReduxRouter } from '@angular-redux/router';
import { NgRedux } from '@angular-redux/store';
var LoginComponent = (function () {
    function LoginComponent(route, ngReduxRouter, router, actions, ngRedux) {
        this.route = route;
        this.ngReduxRouter = ngReduxRouter;
        this.router = router;
        this.actions = actions;
        this.ngRedux = ngRedux;
        this.form = this._buildForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.loggedIn$.subscribe(function (isLoggedIn) {
            console.log('this.returnUrl:', _this.returnUrl);
            if (isLoggedIn) {
                console.log("is loggedIn");
                _this.router.navigate([_this.returnUrl]);
            }
        }, function (error) {
            console.log("fail to check login");
            _this.actions.logoutUser();
        });
    };
    LoginComponent.prototype.login = function (formCredentials) {
        this.actions.loginUser(formCredentials);
    };
    LoginComponent.prototype._buildForm = function () {
        return new FormGroup({
            usernameOrEmail: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    };
    return LoginComponent;
}());
__decorate([
    select(['session', 'isLoading']),
    __metadata("design:type", Observable)
], LoginComponent.prototype, "isLoading$", void 0);
__decorate([
    select(function (s) { return !!s.session.token; }),
    __metadata("design:type", Observable)
], LoginComponent.prototype, "loggedIn$", void 0);
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        NgReduxRouter,
        Router,
        SessionActions,
        NgRedux])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=../../../../../../client/app/users/login/login.component.js.map