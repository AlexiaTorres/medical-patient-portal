import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from '../admin-routing.module';

import {DataFormComponent} from './data-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule
    ],
    declarations: [
        DataFormComponent
    ],
    exports: [DataFormComponent]
})
export class DataFormModule {
}
