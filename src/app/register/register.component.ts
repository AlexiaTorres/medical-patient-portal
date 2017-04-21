import {Component, OnInit} from '@angular/core';
import {Router}   from '@angular/router';

import {Data}    from './data';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    // FORM DATA
    patients = ['-Me/Other-', 'Me', 'Other'];
    countries = ['-Choose your country-', 'Spain', 'United States'];
    cities = ['-Choose your city-', 'Madrid', 'Valencia'];
    counties = ['-Choose your county-', 'Galapagar', 'Las Rozas', 'Majadahonda'];
    phone_types_1 = ['-Mobile/Home/Work-', 'Mobile', 'Home', 'Work'];
    phone_types_2 = ['-Mobile/Home/Work-', 'Mobile', 'Home', 'Work'];
    model = new Data(
        this.patients[0],
        this.countries[0],
        this.cities[0],
        this.counties[0],
        '',
        '',
        '',
        this.phone_types_1[0],
        this.phone_types_2[0],
        '',
        ''
    );

    selectedCountry = this.countries[0];
    selectedCity = this.cities[0];
    selectedCounty = this.counties[0];
    selected_me = false;
    selected_other = false;
    selected_none = true;
    finished_first_step = false;
    submitted = false;
    bodyClasses = 'register-page';
    body = document.getElementsByTagName('body')[0];
    icheck: JQuery;

    constructor(private router: Router) {
    }

    ngOnInit() {
        // Add the register-page class to the body
        // $('body').addClass(this.bodyClasses);
        this.body.classList.add(this.bodyClasses);   //add the class

        this.icheck = jQuery('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });

    }

    onChange(selectedValue) {
        if (selectedValue === 'Me') {
            this.selected_other = false;
            this.selected_none = false;
            this.selected_me = true;
        }
        if (selectedValue === 'Other') {
            this.selected_me = false;
            this.selected_none = false;
            this.selected_other = true;
        }
        if (selectedValue === '-Me/Other-') {
            this.selected_me = false;
            this.selected_other = false;
            this.selected_none = true;
        }

        this.selectedCountry = selectedValue;
        this.selectedCounty = selectedValue;
        this.selectedCity = selectedValue;
        console.log(this.selectedCity);
    }
    onFirstNextStep() {
        this.finished_first_step = true;
    }
    onFirstBackStep() {
        this.finished_first_step = false;
    }


    // FORM DATA
    onSubmit() {
        this.submitted = true;
    }

    ngOnDestroy() {
        // remove the register-page class to the body
        // $('body').removeClass(this.bodyClasses);
        this.body.classList.remove(this.bodyClasses);
    }

    ngAfterViewInit() {
    }

    gotoAdmin() {
        this.router.navigate(['/admin']);
    }

}
