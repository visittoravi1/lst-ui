import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const started = Date.now();
        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                const elapsedTime = Date.now() - started;
                console.log(`Request took ${request.urlWithParams} took ${elapsedTime} ms`);
            }
        }, (error: any) => {
            const elapsedTime = Date.now() - started;
            console.log(error);
            console.log(`Request for ${request.urlWithParams} failed after ${elapsedTime} ms, with error code ${error.status}.`);
        }));
    }
}
