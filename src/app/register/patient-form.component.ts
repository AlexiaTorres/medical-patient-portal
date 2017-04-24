/**
 * Created by R00056 on 24/04/2017.
 */
import {Component} from '@angular/core';
import {DataPatient}    from './data-patient';

@Component({
    selector: 'patient-form',
    templateUrl: './patient-form.component.html'
})
export class PatientFormComponent {
    patient_countries = ['-Choose your country-', 'Spain', 'United States'];
    patient_cities = ['-Choose your city-', 'Madrid', 'Valencia'];
    patient_counties = ['-Choose your county-', 'Galapagar', 'Las Rozas', 'Majadahonda'];
    patient_phone_types_1 = ['-Mobile/Home/Work-', 'Mobile', 'Home', 'Work'];
    patient_phone_types_2 = ['-Mobile/Home/Work-', 'Mobile', 'Home', 'Work'];

    model = new DataPatient(
        this.patient_countries[0],
        this.patient_cities[0],
        this.patient_counties[0],
        '',
        '',
        '',
        this.patient_phone_types_1[0],
        this.patient_phone_types_2[0],
        '',
        ''
    );
}