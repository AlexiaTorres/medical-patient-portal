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
            fullUrl: {
                'type': 'string',
                'description': 'url'
            },
            resource: {
                'type': 'object',
                resourceType: {
                    'type': 'string',
                    'description': 'Patient'
                },
                id: {
                    'type': 'number',
                    'description': '27944'
                },
                meta: {
                    'type': 'object',
                    versionId: {
                        'type': 'string',
                        'description': '4'
                    },
                    lastUpdated: {
                        'type': 'string',
                        'description': '2017-04-23T23:05:15.587-04:00'
                    }
                },
                text: {
                    'type': 'object',
                    status: {
                        'type': 'string',
                        'description': 'generated'
                    },
                    div: {
                        'type': 'string',
                        'description': 'div'
                    }
                },
                name: [
                    {
                        use: 'official',
                        text: 'SANTIAGO KUROWSKI',
                        family: [
                            'KUROWSKI'
                        ],
                        given: [
                            'SANTIAGO'
                        ]
                    },
                    {
                        family: {
                            'type': 'array',
                        },
                        given: {
                            'type': 'array'
                        }
                    }
                ],
                gender: {
                    'type': 'string',
                    'description': 'gender'
                }
                ,
                birthDate: {
                    'type': 'date',
                    'description': 'BirthDate'
                }
            },


            search: {
                'mode': 'match'
            }
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
                this.patient = (response.data.entry[0].resource);
            }
        }, (err) => {
            console.log(err);
        });
    }

    myStringify(obj: any): string {
        return JSON.stringify(obj, null, '  ');
    }
}
