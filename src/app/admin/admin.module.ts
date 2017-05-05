import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from 'angular2-schema-form';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {MainSideComponent} from './main-side/main-side.component';
import {MainHeaderComponent} from './main-header/main-header.component';
import {FooterComponent} from './footer/footer.component';
import {ControlSidebarComponent} from './control-sidebar/control-sidebar.component';
import {Dashboard1Component} from './dashboard1/dashboard1.component';
import {DataFormComponent as PersonalData} from './personal-data/data-form.component';
import {AppointmentsComponent} from './appointments/appointments.component';
import {NewAppointmentComponent} from './appointments/new-appointment.component';
import {CalendarComponent} from './calendar/calendar.component';
import {TestFormComponent} from './personal-data/test-form.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        SchemaFormModule
    ],
    declarations: [
        AdminComponent,
        MainSideComponent,
        MainHeaderComponent,
        FooterComponent,
        ControlSidebarComponent,
        Dashboard1Component,
        PersonalData,
        AppointmentsComponent,
        NewAppointmentComponent,
        CalendarComponent,
        TestFormComponent
    ],
    providers: [{provide: WidgetRegistry, useClass: DefaultWidgetRegistry}],
    exports: [AdminComponent]
})
export class AdminModule {
}
