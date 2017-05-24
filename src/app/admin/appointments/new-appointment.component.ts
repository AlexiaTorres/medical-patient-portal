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
    available_days = ['Wednesday 13th', 'Tuesday 14th', 'Monday 18th', 'Thursday 19th'];
    doctors = [
        {
            id: 1,
            name: 'Dr. Khadar',
            speciality: 'Cardiac - Gynaecological - Surgery',
            photo: 'dr_1'
        },
        {
            id: 2,
            name: 'Dr. Johnson',
            speciality: 'Ophthalmology - Laryngological - Gynaecological',
            photo: 'dr_2'
        },
        {
            id: 3,
            name: 'Dr. Kyle',
            speciality: 'Dental - Cardiac - Health Care',
            photo: 'dr_3'
        }
    ];
    page = 2;
    mobile_query = window.matchMedia('(max-width: 768px)');
    showing_searcher = false;
    showing_calendar = false;
    showing_results = false;
    calendar: JQuery;
    startDate = '12-05-2017';
    endDate = '';
    hours = ['10:39', '11:17', '11:41'];
    selected_hour = '10:11';
    morning_hours = ['10:39', '11:17', '11:41'];
    afternoon_hours = ['12:39', '13:17', '15:41'];
    evening_hours = ['19:39', '20:17', '20:41'];

    constructor(config: NgbPaginationConfig) {
        config.size = 'sm';
        config.boundaryLinks = true;
    }

    ngOnInit() {
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

        this.calendar = jQuery('#appointmentCalendar').datepicker();

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

    onSelectedHour(hour) {
        this.selected_hour = hour;
    }

    showMorningAvailability() {
        this.selected_hour = '10:11';
        this.hours = this.morning_hours;
        $('a > span.badge.badge-morning').addClass('morning_selected');
        $('a > span.badge.badge-afternoon').removeClass('afternoon_selected');
        $('a > span.badge.badge-evening').removeClass('evening_selected');
    }

    showAfternoonAvailability() {
        this.selected_hour = '12:39';
        this.hours = this.afternoon_hours;
        $('a > span.badge.badge-afternoon').addClass('afternoon_selected');
        $('a > span.badge.badge-morning').removeClass('morning_selected');
        $('a > span.badge.badge-evening').removeClass('evening_selected');
    }

    showEveningAvailability() {
        this.selected_hour = '19:39';
        this.hours = this.evening_hours;
        $('a > span.badge.badge-evening').addClass('evening_selected');
        $('a > span.badge.badge-morning').removeClass('morning_selected');
        $('a > span.badge.badge-afternoon').removeClass('afternoon_selected');
    }

    showSearcher() {
        this.showing_searcher ? this.showing_searcher = false : this.showing_searcher = true;

        if (this.showing_searcher) {
            $('.appointment_searcher').show();
        } else {
            $('.appointment_searcher').hide();
        }
    }

    searchAvailability() {
        this.showing_calendar = true;
        this.showing_results = true;
    }
}


