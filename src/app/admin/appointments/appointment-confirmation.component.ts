import {Component, OnInit} from '@angular/core';
import {IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts} from 'angular-2-dropdown-multiselect';

@Component({
    selector: 'appointment-confirmation',
    templateUrl: './appointment-confirmation.component.html',
    styleUrls: ['./appointments.component.css']
})
export class AppointmentConfirmationComponent implements OnInit {
    patient: IMultiSelectOption[];
    mySettings: IMultiSelectSettings;
    myTexts: IMultiSelectTexts;
    patient_model: number[];
    ngOnInit() {

        this.patient = [
            {id: 1, name: 'Patient 1'},
            {id: 2, name: 'Patient 2'},
            {id: 3, name: 'Patient 3'}
        ];

        this.mySettings = {
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-default btn-block',
            dynamicTitleMaxItems: 1,
            displayAllSelectedText: true
        };

        // Text configuration
        this.myTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find',
            defaultTitle: 'Alexander Pierce',
            allSelected: 'All selected',
        };
     }
}