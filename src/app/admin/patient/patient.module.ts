import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from 'angular2-schema-form';
import {PatientComponent} from './patient.component';
import {PersonalComponent} from './personal.component';
import {AddressComponent} from './address.component';
import {ContactComponent} from './contact.component';
import {AppointmentsComponent} from './appointments.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SchemaFormModule
    ],
    declarations: [
        PatientComponent,
        PersonalComponent,
        AddressComponent,
        ContactComponent,
        AppointmentsComponent
    ],
    providers: [{provide: WidgetRegistry, useClass: DefaultWidgetRegistry}],
    exports: [PatientComponent]
})
export class PatientModule {
}
