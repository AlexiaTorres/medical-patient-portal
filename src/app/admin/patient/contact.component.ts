import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'patient-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./patient.component.css']
})
export class ContactComponent implements OnInit {

    // FORM DATA
    submitted = false;
    phone_types_1 = ['-Mobile/Home/Work-', 'Mobile', 'Home', 'Work'];
    phone_types_2 = ['-Mobile/Home/Work-', 'Mobile', 'Home', 'Work'];

    editing = false;
    bodyClasses = 'data-form';
    body = document.getElementsByTagName('body')[0];
    icheck: JQuery;

    model = {
        phone_type_1: 'Mobile',
        phone_1: '611489220'
    };

    ngOnInit() {
        this.body.classList.add(this.bodyClasses);

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
}
