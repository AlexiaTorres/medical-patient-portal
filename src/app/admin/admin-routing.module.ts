import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';

import {AdminComponent} from './admin.component';
import {Dashboard1Component} from './dashboard1/dashboard1.component';
import {DataFormComponent as PersonalData} from './personal-data/data-form.component';
import {AppointmentsComponent} from './appointments/appointments.component';
import {PatientComponent} from './patient/patient.component';
import {NewAppointmentComponent} from './appointments/new-appointment.component';
import {AppointmentConfirmationComponent} from "./appointments/appointment-confirmation.component";
// import {TestFormComponent} from './personal-data/test-form.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'admin',
                component: AdminComponent,
                children: [
                    {
                        path: '',
                        component: Dashboard1Component
                    },
                    {
                        path: 'dashboard',
                        component: Dashboard1Component
                    },
                    {
                        path: 'personal-data',
                        component: PersonalData
                    },
                    {
                        path: 'appointments',
                        component: AppointmentsComponent
                    },
                    {
                        path: 'new-appointment',
                        component: NewAppointmentComponent
                    },
                    {
                        path: 'new-appointment/confirmation',
                        component: AppointmentConfirmationComponent
                    },
                    {
                        path: 'patient',
                        component: PatientComponent
                    }
                    /*,
                    {
                        path: 'test',
                        component: TestFormComponent
                    }*/
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {
}
