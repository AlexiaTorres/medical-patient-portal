/**
 * Created by R00056 on 24/04/2017.
 */
import {Component, Input} from '@angular/core';

@Component({
    selector: 'form-input',
    templateUrl: './input.component.html'
})

export class FormInputComponent {
    @Input() className= 'br';
    @Input() inputName= '';
}
