var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { SessionActions } from '../core/actions';
import { Router } from '@angular/router';
var AppToolbarComponent = (function () {
    function AppToolbarComponent(router, actions) {
        this.router = router;
        this.actions = actions;
    }
    AppToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedIn$.subscribe(function (isLoggedIn) {
            if (isLoggedIn)
                _this.router.navigate(['login']);
        }, function (error) {
            _this.router.navigate(['login']);
        });
    };
    AppToolbarComponent.prototype.logout = function () {
        var toto = this.actions.logoutUser();
        console.log('toot:', toto);
    };
    return AppToolbarComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], AppToolbarComponent.prototype, "titleToolbar", void 0);
__decorate([
    select(function (s) { return !s.session.token; }),
    __metadata("design:type", Observable)
], AppToolbarComponent.prototype, "loggedIn$", void 0);
__decorate([
    select(function (s) { return !!s.session.token; }),
    __metadata("design:type", Observable)
], AppToolbarComponent.prototype, "loggedOut$", void 0);
AppToolbarComponent = __decorate([
    Component({
        selector: 'app-app-toolbar',
        templateUrl: './app-toolbar.component.html',
        styleUrls: ['./app-toolbar.component.css']
    }),
    __metadata("design:paramtypes", [Router,
        SessionActions])
], AppToolbarComponent);
export { AppToolbarComponent };
//# sourceMappingURL=../../../../../client/app/app-toolbar/app-toolbar.component.js.map