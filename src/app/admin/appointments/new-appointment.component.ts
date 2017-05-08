import {Component, OnInit} from '@angular/core';
import {IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts} from 'angular-2-dropdown-multiselect';
// declare let $: JQueryStatic;

@Component({
    selector: 'new-appointment',
    templateUrl: './new-appointment.component.html',
    styleUrls: ['./appointments.component.css']
})
export class NewAppointmentComponent implements OnInit {
    hospital_model: number[];
    speciality_model: number[];
    department_model: number[];
    gender_model: number[];
    hospital: IMultiSelectOption[];
    speciality: IMultiSelectOption[];
    department: IMultiSelectOption[];
    gender: IMultiSelectOption[];
    mySettings: IMultiSelectSettings;
    genderSettings: IMultiSelectSettings;
    genderTexts: IMultiSelectTexts;
    myTexts: IMultiSelectTexts;

    ngOnInit() {

        // Settings configuration
        this.mySettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-default btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true
        };
        this.genderSettings = {
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-default btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true
        }

        // Text configuration
        this.myTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };

        this.genderTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            defaultTitle: 'I prefere...',
            allSelected: 'Any gender preference',
        };

        // Labels / Parents
        this.hospital = [
            {id: 1, name: 'A Coruña', isLabel: true},
            {id: 2, name: 'HOSPITAL QUIRÓNSALUD A CORUÑA', parentId: 1},
            {id: 3, name: 'Ciudad Real', isLabel: true},
            {id: 4, name: 'CLÍNICA QUIRÓNSALUD ALCÁZAR', parentId: 3},
            {id: 5, name: 'HOSPITAL QUIRÓNSALUD CIUDAD REAL', parentId: 3},
            {id: 6, name: 'Madrid', isLabel: true},
            {id: 7, name: 'CENTRO MÉDICO TRES CANTOS', parentId: 6},
            {id: 8, name: 'HOSPITAL DE DÍA QUIRÓNSALUD ALCALÁ DE HENARES', parentId: 6},
            {id: 9, name: 'HOSPITAL GENERAL DE VILLALBA', parentId: 6},
            {id: 10, name: 'HOSPITAL LA LUZ', parentId: 6},
            {id: 11, name: 'HOSPITAL QUIRÓNSALUD SAN JOSÉ', parentId: 6},
            {id: 12, name: 'HOSPITAL QUIRÓNSALUD SUR', parentId: 6},
            {id: 13, name: 'HOSPITAL UNIVERSITARIO REY JUAN CARLOS', parentId: 6},
            {id: 14, name: 'Toledo', isLabel: true},
            {id: 15, name: 'HOSPITAL DE DÍA QUIRÓNSALUD TALAVERA', parentId: 14},
            {id: 16, name: 'HOSPITAL QUIRÓNSALUD TOLEDO', parentId: 14}
        ];
        this.department = [
            {id: 1, name: 'Cardial'},
            {id: 2, name: 'Pediatric'},
            {id: 3, name: 'Dental'},
            {id: 4, name: 'Gynaecological'},
            {id: 5, name: 'Health Care'},
            {id: 6, name: 'Laryngological'},
            {id: 7, name: 'Ophthalmology'},
            {id: 8, name: 'Surgery'},
        ];
        this.speciality = [
            {id: 1, name: 'Cardial'},
            {id: 2, name: 'Pediatric'},
            {id: 3, name: 'Dental'},
            {id: 4, name: 'Gynaecological'},
            {id: 5, name: 'Health Care'},
            {id: 6, name: 'Laryngological'},
            {id: 7, name: 'Ophthalmology'},
            {id: 8, name: 'Surgery'},
        ];
        this.gender = [
            {id: 1, name: 'Female doctor'},
            {id: 2, name: 'Male doctor'}
        ];

       /* $('input[name="daterange"]').daterangepicker({
            timePicker: true,
            timePickerIncrement: 30,
            locale: {
                format: 'MM/DD/YYYY h:mm A'
            }
        });*/
    }

    onChange() {
        console.log(this.hospital_model);
    }
}


