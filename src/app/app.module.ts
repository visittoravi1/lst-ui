import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppCardComponent } from './components/app-card/app-card.component';
import { FlowCardComponent } from './components/flow-card/flow-card.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {GoogleChartsModule} from 'angular-google-charts';
import { FlowComponent } from './flow/flow.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {CustomHttpInterceptor} from './interceptors/custom-http.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        AppCardComponent,
        FlowCardComponent,
        FlowComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        GoogleChartsModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            multi: true,
            useClass: CustomHttpInterceptor
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
