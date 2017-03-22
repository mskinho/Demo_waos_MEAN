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
import { DevToolsExtension, NgRedux } from '@angular-redux/store';
import { NgReduxRouter } from '@angular-redux/router';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer, middleware, enhancers } from './core/store';
import { SessionEpics } from './core/epics';
var AppComponent = (function () {
    function AppComponent(devTools, ngRedux, ngReduxRouter, epics) {
        this.devTools = devTools;
        this.ngRedux = ngRedux;
        this.ngReduxRouter = ngReduxRouter;
        this.epics = epics;
        this.title = 'app works!';
        middleware.push(createEpicMiddleware(this.epics.login));
        ngRedux.configureStore(rootReducer, {}, middleware, devTools.isEnabled() ? enhancers.concat([devTools.enhancer()]) :
            enhancers);
        ngReduxRouter.initialize();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [DevToolsExtension,
        NgRedux,
        NgReduxRouter,
        SessionEpics])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=../../../../client/app/app.component.js.map