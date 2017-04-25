import {Component, OnInit} from '@angular/core';
import {Router}   from '@angular/router';
import {Data}    from './data';

@Component({
    selector: 'data-form',
    templateUrl: './data-form.component.html',
    styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
    // FORM DATA
    countries = ['-Choose your country-', 'Spain', 'United States'];
    cities = ['-Choose your city-', 'Madrid', 'Valencia'];
    counties = ['-Choose your county-', 'Galapagar', 'Las Rozas', 'Majadahonda'];
    doc_types = ['DNI'];
    phone_types_1 = ['-Mobile/Home/Work-', 'Mobile', 'Home', 'Work'];
    phone_types_2 = ['-Mobile/Home/Work-', 'Mobile', 'Home', 'Work'];

    editing = false;

    model = {
        first_name: 'Alexiaa',
        last_name: 'Torres',
        birthday: '1993-11-20'
    };
    bodyClasses = 'data-form';
    body = document.getElementsByTagName('body')[0];
    icheck: JQuery;

    constructor(private router: Router) {
    }

    ngOnInit() {
        // Add the register-page class to the body
        // $('body').addClass(this.bodyClasses);
        this.body.classList.add(this.bodyClasses);   // add the class

        this.icheck = jQuery('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });
    }

    onEdit() {
        this.editing = true;
        $('.disabled-input').removeAttr('disabled');
        $('.disabled-select').removeAttr('disabled');
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
