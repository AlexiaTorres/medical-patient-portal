import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DataFormComponent as PersonalData} from './admin/personal-data/data-form.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent},
            {path: 'admin', component: AdminComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}