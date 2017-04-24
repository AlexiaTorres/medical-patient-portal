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

    showing = true;
    editing = false;

    model = new Data(
        1,
        'Alexia',
        'Torres',
        '1993/11/20',
        'Female',
        this.doc_types[0],
        '',
        this.countries[0],
        this.cities[0],
        this.counties[0],
        '',
        '',
        '',
        this.phone_types_1[0],
        this.phone_types_2[0],
        '',
        '',
        ''
    );
    bodyClasses = 'data-form';
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

    onEdit() {
        this.editing = true;
        this.showing = false;
        document.getElementsByTagName('input')[0].removeAttribute('disabled');
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
