import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from "rxjs";

import { User } from '../models/index';
import { environment } from "../../../environments/environment";

@Injectable()
export class UsersService {

    private _baseUrl : string;
    constructor(private http: Http) {
       // build backend base url
        this._baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
        if (environment.backend.port) {
            this._baseUrl += `:${environment.backend.port}`;
        }
    }
    signup(user: User): Observable<any> {
        let backendURL = `${this._baseUrl}${environment.backend.endpoints.signup}` ;
        return this.http.post(backendURL, user).map((response: Response) => response.json());
    }

    Auth(){
      return JSON.parse(localStorage.getItem('currentUser'));
    }

    getProfile (token): Observable<any> {
      let backendURL = `${this._baseUrl}${environment.backend.endpoints.me}` ;
      return this.http.get(backendURL, this.jwt(token)).map((response: Response) => response.json());
    }
    // private helper methods
    private jwt(token) {
        // create authorization header with jwt token
        if (token) {
            let headers = new Headers({ 'Authorization': 'JWT ' + token });
            return new RequestOptions({ headers: headers });
        }
    }
}
