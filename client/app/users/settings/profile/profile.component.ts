import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../index';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user={};
  @select(s => s.session.token) loggedIn$: Observable<boolean>;

  constructor(private usersService : UsersService) { }

  ngOnInit() {
    if(this.loggedIn$){
      this.loggedIn$.subscribe((token)=>{
        this.usersService.getProfile(token)
          .subscribe((rep)=>{
            this.user = rep;
          })
      })
    }

    console.log()

  }

}
