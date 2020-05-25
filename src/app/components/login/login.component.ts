import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Login} from '../../beans/login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    credentials = new Login();

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
    }

    login() {
        this.authService.login(this.credentials).subscribe(token => console.log(token));
    }

}
