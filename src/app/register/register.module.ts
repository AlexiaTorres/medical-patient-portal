import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';

import {RegisterComponent} from './register.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        RegisterComponent
    ],
    exports: [RegisterComponent]
})
export class RegisterModule {
}
