import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Login} from '../beans/login';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    public login(auth: Login): Observable<Map<string, string>> {
        return this.http.post<Map<string, string>>(environment.apiUrl + '/auth/login', auth.serialize());
    }
}
