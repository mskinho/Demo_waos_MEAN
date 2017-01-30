import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../services/index';
import { User } from '../models/index';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private usersService: UsersService) { }

  ngOnInit() {
    this.model = new User();
    this.loading = false;
  }

    register() {
        this.loading = true;
        this.usersService.signup(this.model)
            .subscribe(
                data => {
                    this.router.navigate(['/login']);
                },
                error => {
                    this.loading = false;
                });
    }

}
