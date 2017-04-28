import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule}   from '@angular/router';

import {AppComponent} from './app.component';
import {AdminModule} from './admin/admin.module';
import {TestComponent} from './test/test.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {NewUserComponent} from './register/new-user.component';
import {PatientFormComponent} from './register/patient-form.component';
import {HomeModule} from './home.module';
@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        LoginComponent,
        RegisterComponent,
        NewUserComponent,
        PatientFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AdminModule,
        RouterModule,
        AppRoutingModule,
        HomeModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
