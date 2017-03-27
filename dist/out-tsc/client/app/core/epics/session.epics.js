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
import { Http } from '@angular/http';
import { SessionActions } from '../actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import { environment } from "../../../environments/environment";
var SessionEpics = (function () {
    function SessionEpics(http) {
        var _this = this;
        this.http = http;
        this.login = function (action$) {
            return action$
                .filter(function (_a) {
                var type = _a.type;
                return type === SessionActions.LOGIN_USER;
            })
                .mergeMap(function (_a) {
                var payload = _a.payload;
                var backendURL = "" + _this._baseUrl + environment.backend.endpoints.signin;
                return _this.http.post(backendURL, payload)
                    .map(function (result) { return ({
                    type: SessionActions.LOGIN_USER_SUCCESS,
                    payload: result.json()
                }); })
                    .catch(function () { return Observable.of({
                    type: SessionActions.LOGIN_USER_ERROR
                }); });
            });
        };
        this._baseUrl = environment.backend.protocol + "://" + environment.backend.host;
        if (environment.backend.port) {
            this._baseUrl += ":" + environment.backend.port;
        }
    }
    return SessionEpics;
}());
SessionEpics = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], SessionEpics);
export { SessionEpics };
//# sourceMappingURL=../../../../../../client/app/core/epics/session.epics.js.map