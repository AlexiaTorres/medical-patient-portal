import {Component, OnInit} from '@angular/core';
// import {TranslateService} from './translate/translate.service';
import {Data}    from './data';

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
    // login_form = false;

    // TRANSLATION DECLARATIONS
    // public translatedText: string;
    // public supportedLanguages: any[];

    // constructor(private _translate: TranslateService) {
    // }

    // FORM DATA
    onSubmit() {
        this.submitted = true;
    }



    //////// NOT SHOWN IN DOCS ////////

    // Reveal in html:
    //   Name via form.controls = {{showFormControls(dataForm)}}
    /*showFormControls(form: any) {
        return form && form.controls['first_name'] &&
            form.controls['first_name'].value; // Dr. IQ
    }*/

    /////////////////////////////
    // TRANSLATE FUNCTIONALITY
    ngOnInit() {
        // standing data
        // this.supportedLanguages = [
        //     {display: 'English', value: 'en'},
        //     {display: 'Español', value: 'es'},
        // ];

        // // set current language
        // this.selectLang('es');
    }

    // isCurrentLang(lang: string) {
    //     // check if the selected lang is current lang
    //     return lang === this._translate.currentLang;
    // }

    // selectLang(lang: string) {
    //     // set current lang;
    //     this._translate.use(lang);
    //     this.refreshText();
    // }

    // refreshText() {
        // refresh translation when language change
    //     this.translatedText = this._translate.instant('hello world');
    // }
}
