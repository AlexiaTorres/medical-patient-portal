import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule}   from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home.component';
@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule
    ],
    bootstrap: [HomeComponent]
})
export class HomeModule {
}
