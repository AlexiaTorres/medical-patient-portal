import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';

import {FormInputComponent} from './input.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        FormInputComponent
    ],
    exports: [FormInputComponent]
})
export class FormInputModule {
}
