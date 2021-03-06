import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';

import {RegisterComponent} from './register.component';
import {FormInputComponent} from './input.component';
import {PatientFormComponent} from './patient-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        RegisterComponent,
        FormInputComponent,
        PatientFormComponent
    ],
    exports: [RegisterComponent]
})
export class RegisterModule {
}
