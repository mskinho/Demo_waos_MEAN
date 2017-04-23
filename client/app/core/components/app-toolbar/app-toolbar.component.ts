import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {TooltipPosition} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';

import { SessionActions } from '../../actions';
import { IUser } from "../../store/session";
@Component({
  selector: 'app-app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss']
})
export class AppToolbarComponent {

  @Input() titleToolbar: string;
  @select(['session', 'token']) loggedIn$: Observable<string>;
  @select(['session', 'user']) user$: Observable<IUser>;

  constructor(private router: Router,
              private actions: SessionActions,) {}

  logout() {
   this.actions.logoutUser();
   this.router.navigate(['/']);
  }

}
