import {Component, OnInit} from '@angular/core';
import {Data} from './data';

@Component({
    selector: 'data-form',
    templateUrl: './data-form.component.html'
})
export class DataFormComponent implements OnInit {
    // FORM DATA
    cities = ['', 'Madrid', 'Las Rozas',
        'Majadahonda', 'Brunete'];

    model = new Data(1, '', '' , '', '', '', '', this.cities[0], '', '', '', '');

    submitted = false;
    login_form = false;

    // FORM DATA
    onSubmit() {
        this.submitted = true;
    }



    //////// NOT SHOWN IN DOCS ////////

    // Reveal in html:
    //   Name via form.controls = {{showFormControls(dataForm)}}
    showFormControls(form: any) {
        return form && form.controls['first_name'] &&
            form.controls['first_name'].value; // Dr. IQ
    }

    /////////////////////////////
    // TRANSLATE FUNCTIONALITY
    ngOnInit() {
    }
}
