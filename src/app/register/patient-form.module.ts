import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';

import {PatientFormComponent} from './patient-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        PatientFormComponent
    ],
    exports: [PatientFormComponent]
})
export class PatientFormModule {
}
