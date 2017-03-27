var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
var SessionActions = SessionActions_1 = (function () {
    function SessionActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    SessionActions.prototype.loginUser = function (credentials) {
        this.ngRedux.dispatch({
            type: SessionActions_1.LOGIN_USER,
            payload: credentials,
        });
    };
    ;
    SessionActions.prototype.logoutUser = function () {
        return this.ngRedux.dispatch({ type: SessionActions_1.LOGOUT_USER });
    };
    ;
    return SessionActions;
}());
SessionActions.LOGIN_USER = 'LOGIN_USER';
SessionActions.LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
SessionActions.LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
SessionActions.LOGOUT_USER = 'LOGOUT_USER';
SessionActions = SessionActions_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [NgRedux])
], SessionActions);
export { SessionActions };
var SessionActions_1;
//# sourceMappingURL=../../../../../../client/app/core/actions/session.actions.js.map