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
    submitted = false;
    countries = ['-Choose your country-', 'Spain', 'United States'];
    cities = ['-Choose your city-', 'Madrid', 'Valencia'];
    counties = ['-Choose your county-', 'Galapagar', 'Las Rozas', 'Majadahonda'];
    doc_types = ['DNI'];
    phone_types_1 = ['-Mobile/Home/Work-', 'Mobile', 'Home', 'Work'];
    phone_types_2 = ['-Mobile/Home/Work-', 'Mobile', 'Home', 'Work'];

    editing = false;
    model = {
        first_name: 'Alexia',
        last_name: 'Torres',
        birthday: '1993-11-20',
        gender: 'female',
        doc_type: 'DNI',
        doc_num: '05467807V',
        country: 'Spain',
        city: 'Madrid',
        county: 'Galapagar',
        ad1: 'C/San Gregorio 29',
        pc: '28260',
        phone_type_1: 'Mobile',
        phone_1: '611489220',
        email: 'alexia.torres@commonms.com'
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

    // FORM DATA
    onSubmit() {
        this.submitted = true;
    }

    onEdit() {
        this.editing = true;
        $('.disabled-input').removeAttr('disabled');
        $('.disabled-select').removeAttr('disabled');
    }

    public toUser(model: string) {
        let jsonData = JSON.parse(model);
        this.model = new Data(
            jsonData.id,
            jsonData.first_name,
            jsonData.last_name,
            jsonData.birthday,
            jsonData.gender,
            jsonData.doc_type,
            jsonData.doc_num,
            jsonData.country,
            jsonData.city,
            jsonData.county,
            jsonData.pc,
            jsonData.ad1,
            jsonData.ad2,
            jsonData.phone_type_1,
            jsonData.phone_type_2,
            jsonData.phone_1,
            jsonData.phone_2,
            jsonData.email
        );
        console.log(this.model);
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
