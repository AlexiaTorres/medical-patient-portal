import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from 'angular2-schema-form';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AdminRoutingModule} from '../admin-routing.module';
import {NewAppointmentComponent} from './new-appointment.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        SchemaFormModule,
        MultiselectDropdownModule,
        NgbModule.forRoot()
    ],
    declarations: [
        NewAppointmentComponent
    ],
    providers: [{provide: WidgetRegistry, useClass: DefaultWidgetRegistry}],
    exports: [NewAppointmentComponent]
})
export class NewAppointmentModule {
}
