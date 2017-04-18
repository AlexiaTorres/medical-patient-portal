import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate/translate.service';

@Component({
    moduleId: module.id,
    selector: 'trans-label',
    templateUrl: 'trans-label.component.html',
})

export class TransLabelComponent implements OnInit {

    public translatedText: string;
    public supportedLanguages: any[];

    constructor(private _translate: TranslateService) { }

    ngOnInit() {
        // standing data
        this.supportedLanguages = [
            { display: 'English', value: 'en' },
            { display: 'Español', value: 'es' },
        ];

        // set current language
        this.selectLang('es');
    }

    isCurrentLang(lang: string) {
        // check if the selected lang is current lang
        return lang === this._translate.currentLang;
    }

    selectLang(lang: string) {
        // set current lang;
        this._translate.use(lang);
        this.refreshText();
    }

    refreshText() {
        // refresh translation when language change
        this.translatedText = this._translate.instant('hello world');
    }
}
