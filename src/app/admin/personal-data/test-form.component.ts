import {Component} from '@angular/core';
import {FhirClient} from 'ng-fhir/FhirClient';

@Component({
    selector: 'test-form',
    // Bind the 'mySchema' member to the schema input of the Form component.
    templateUrl: './test-form.component.html',
    styleUrls: ['./data-form.component.css']
})

export class TestFormComponent {
    // The schema that will be used to generate a form
    mySchema = {
        properties: {
            fullUrl: 'http://fhirtest.uhn.ca/baseDstu2/Patient/27944',
            resource: {
                resourceType: 'Patient',
                id: '27944',
                meta: {
                    versionId: '4'
                },
                lastUpdated: '2017-04-23T23:05:15.587-04:00'
            },
            text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml">SANTIAGO KUROWSKI</div>'
            },
            name: [{
                use: 'official',
                text: 'SANTIAGO KUROWSKI',
                family: ['KUROWSKI'],
                given: ['SANTIAGO']
            }],
            gender: 'female',
            birthDate: '1937-05-14',
            search: {'mode': 'match'}
        }
    };
    myActions = {
        'alert': (property) => {
            alert(JSON.stringify(property.value));
        },
        'reset': (property) => {
            property.reset();
        }
    };
// Fhir
    private client: FhirClient;

    private config: any = {
        'baseUrl': 'http://fhirtest.uhn.ca/baseDstu2',
        'credentials': 'same-origin',
    };
    public patient: any = {};

    constructor() {

        this.client = new FhirClient(this.config);
        this.client.search({type: 'Patient', query: {}}).then((response) => {
            if (response.data) {
                this.patient = (response.data.entry[0]);
            }
        }, (err) => {
            console.log(err);
        });
    }

    myStringify(obj: any): string {
        return JSON.stringify(obj, null, '  ');
    }
}
