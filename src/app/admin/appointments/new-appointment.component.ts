import {Component, OnInit} from '@angular/core';
import {IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts} from 'angular-2-dropdown-multiselect';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'new-appointment',
    templateUrl: './new-appointment.component.html',
    styleUrls: ['./appointments.component.css'],
    providers: [NgbPaginationConfig]
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
    patient: IMultiSelectOption[];
    mySettings: IMultiSelectSettings;
    genderSettings: IMultiSelectSettings;
    genderTexts: IMultiSelectTexts;
    myTexts: IMultiSelectTexts;
    separator = `<span class="hour_separator">|</span>`;
    availability_moment: string;
    availability_hours = [];
    hour_selected = false;
    available_days = ['Wednesday 13th', 'Tuesday 14th', 'Monday 18th', 'Thursday 19th'];
    page = 2;
    mobile_query = window.matchMedia('(max-width: 768px)');
    showing_searcher = false;
    startDate = '12-05-2017';
    endDate = '';

    constructor(config: NgbPaginationConfig) {
        config.size = 'sm';
        config.boundaryLinks = true;
    }

    ngOnInit() {
        console.log(this.endDate.setDate(this.startDate.getDate() + 14));
        if (this.mobile_query.matches) {
            $('div.appointment_hours.availability_mobile').addClass('availability_mobile').removeClass('availability_desktop');
            $('button.searcher-btn').show();
            if (!this.showing_searcher) {
                $('.appointment_searcher').hide();
            }
        } else {
            $('div.appointment_hours.availability_mobile').addClass('availability_desktop').removeClass('availability_mobile');
            $('button.searcher-btn').hide();
        }
        // Settings configuration
        this.mySettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-aqua btn-block',
            dynamicTitleMaxItems: 1,
            displayAllSelectedText: true
        };
        this.genderSettings = {
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
            {id: 2, name: 'Hospital Quirónsalud A Coruña', parentId: 1},
            {id: 3, name: 'Ciudad Real', isLabel: true},
            {id: 4, name: 'Clínica Quirónsalud Alcázar', parentId: 3},
            {id: 5, name: 'Hospital Quirónsalud Ciudad Real', parentId: 3},
            {id: 6, name: 'Madrid', isLabel: true},
            {id: 7, name: 'Centro Médico Tres Cantos', parentId: 6},
            {id: 8, name: 'Hospital de día Quirónsalud Alcalá de Henares', parentId: 6},
            {id: 9, name: 'Hospital General de Villalba', parentId: 6},
            {id: 10, name: 'Hospital la Luz', parentId: 6},
            {id: 11, name: 'Hospital Quirónsalud San José', parentId: 6},
            {id: 12, name: 'Hospital Quirónsalud Sur', parentId: 6},
            {id: 13, name: 'Hospital Universitario Rey Juan Carlos', parentId: 6},
            {id: 14, name: 'Toledo', isLabel: true},
            {id: 15, name: 'Hospital de día Quirónsalud Talavera', parentId: 14},
            {id: 16, name: 'Hospital Quirónsalud Toledo', parentId: 14}
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

    onHourSelected() {
        this.hour_selected = true;
    }

    showMorningAvailability() {
        this.availability_hours = ['09:11', '09:48', '10:17', '11:13'];
        this.availability_moment = 'Morning';
    }

    showAfternoonAvailability() {
        this.availability_hours = ['12:17', '13:21', '14:39']
        this.availability_moment = 'Afternoon';
    }

    showEveningAvailability() {
        this.availability_hours = [
            '20:21', '20:29', '21:03', '21:11',
            '20:21', '20:29', '21:03', '21:11',
            '20:21', '20:29', '21:03', '21:11',
            '20:21', '20:29', '21:03', '21:11',
            '20:21', '20:29', '21:03', '21:11'];
        this.availability_moment = 'Evening';
    }

    showSearcher() {
        this.showing_searcher ? this.showing_searcher = false : this.showing_searcher = true;

        if (this.showing_searcher) {
            $('.appointment_searcher').show();
        } else {
            $('.appointment_searcher').hide();
        }
    }
}


