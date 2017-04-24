import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';

import {NewUserComponent} from './new-user.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        NewUserComponent
    ],
    exports: [NewUserComponent]
})
export class NewUserModule {
}
