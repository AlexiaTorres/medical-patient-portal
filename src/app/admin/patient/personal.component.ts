import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'patient-personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./patient.component.css']
})
export class PersonalComponent implements OnInit {

    // FORM DATA
    submitted = false;
    doc_types = ['DNI'];

    editing = false;
    bodyClasses = 'data-form';
    body = document.getElementsByTagName('body')[0];
    icheck: JQuery;

    model = {
        first_name: 'Alexia',
        last_name: 'Torres',
        birthday: '1993-11-20',
        gender: 'female',
        doc_type: 'DNI',
        doc_num: '05467807V'
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
        this.model.last_name = model.last_name;
        this.editing = false;
        $('.disabled-input').attr('disabled', 'disabled');
        $('.disabled-select').attr('disabled', 'disabled');
    }
}
