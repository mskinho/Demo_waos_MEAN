import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { environment } from "../../../environments/environment";

@Injectable()
export class AuthenticationService {
    private _baseUrl : string;

    constructor(private http: Http) {
       // build backend base url
        this._baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
        if (environment.backend.port) {
            this._baseUrl += `:${environment.backend.port}`;
        }
     }

    login(usernameOrEmail: string, password: string) {
        let backendURL = `${this._baseUrl}${environment.backend.endpoints.signin}` ;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('usernameOrEmail', usernameOrEmail);
        urlSearchParams.append('password', password);
        let body = urlSearchParams.toString()

        return this.http.post(backendURL, body, {headers:headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let res = response.json();
                console.log(res);
                if (res && res.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    console.log('token:', res.token);
                    localStorage.setItem('currentUser', JSON.stringify(res.token));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}