import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'patient-address',
    templateUrl: './address.component.html',
    styleUrls: ['./patient.component.css']
})
export class AddressComponent implements OnInit {

    // FORM DATA
    submitted = false;
    countries = ['-Choose your country-', 'Spain', 'United States'];
    cities = ['-Choose your city-', 'Madrid', 'Valencia'];
    counties = ['-Choose your county-', 'Galapagar', 'Las Rozas', 'Majadahonda'];

    editing = false;
    bodyClasses = 'data-form';
    body = document.getElementsByTagName('body')[0];
    icheck: JQuery;

    model = {
        country: 'Spain',
        city: 'Madrid',
        county: 'Galapagar',
        ad1: 'C/San Gregorio 29',
        pc: '28260'
    };

    ngOnInit() {
        this.body.classList.add(this.bodyClasses);   // add the class

        this.icheck = jQuery('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });
    }

    // FORM DATA
    onSubmit() {
        this.submitted = true;
    }

    onEdit() {
        this.editing = true;
        $('.disabled-input').removeAttr('disabled');
        $('.disabled-select').removeAttr('disabled');
    }

    onSave(model) {
        this.editing = false;
        $('.disabled-input').attr('disabled', 'disabled');
        $('.disabled-select').attr('disabled', 'disabled');
    }

    onCancel(model) {
        this.editing = false;
        $('.disabled-input').attr('disabled', 'disabled');
        $('.disabled-select').attr('disabled', 'disabled');
    }
}
