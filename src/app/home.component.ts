import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{
    showStyle = false;

    getStyle() {
        if (this.showStyle) {
            return 'none';
        } else {
            return '';
        }
    }
    ngOnInit() {
    }
}
