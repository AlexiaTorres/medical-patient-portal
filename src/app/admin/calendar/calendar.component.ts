import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
     calendar: JQuery;
     ngOnInit() {
         this.calendar = jQuery('#calendar').datepicker();
     }
}

