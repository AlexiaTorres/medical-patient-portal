import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'history-pdf-viewer',
    templateUrl: './pdf-viewer.component.html',
    styleUrls: ['./history.component.css']

})
export class HistoryPDFComponent implements OnInit {
    ngOnInit() {
    }
    pdfSrc: string = '../../../assets/pdf/pdf-test.pdf';
    page: number = 1;
}
