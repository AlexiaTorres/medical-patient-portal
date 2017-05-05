import {Component, OnInit} from '@angular/core';
// import {FhirClient} from 'ng-fhir/FhirClient';

@Component({
    selector: 'data-form',
    templateUrl: './data-form.component.html',
    styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
    // FORM DATA
    submitted = false;
    countries = ['-Choose your country-', 'Spain', 'United States'];
    cities = ['-Choose your city-', 'Madrid', 'Valencia'];
    counties = ['-Choose your county-', 'Galapagar', 'Las Rozas', 'Majadahonda'];
    doc_types = ['DNI'];
    phone_types_1 = ['-Mobile/Home/Work-', 'Mobile', 'Home', 'Work'];
    phone_types_2 = ['-Mobile/Home/Work-', 'Mobile', 'Home', 'Work'];

    editing = false;
    bodyClasses = 'data-form';
    body = document.getElementsByTagName('body')[0];
    icheck: JQuery;

    // The schema that will be used to generate a form
    /*mySchema = {
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
    };*/

    // only design data
    model = {
        first_name: 'Alexia',
        last_name: 'Torres',
        birthday: '1993-11-20',
        gender: 'female',
        doc_type: 'DNI',
        doc_num: '05467807V',
        country: 'Spain',
        city: 'Madrid',
        county: 'Galapagar',
        ad1: 'C/San Gregorio 29',
        pc: '28260',
        phone_type_1: 'Mobile',
        phone_1: '611489220',
        email: 'alexia.torres@commonms.com'
    };

    // Fhir
   /* private client: FhirClient;

    private config: any = {
        'baseUrl': 'http://fhirtest.uhn.ca/baseDstu2',
        'credentials': 'same-origin',
    };

    public patient: any = {};
    public patient_name: any = {};

    constructor() {

        this.client = new FhirClient(this.config);
        this.client.search({type: 'Patient', query: {}}).then((response) => {
            if (response.data) {
                this.patient = (response.data.entry[0].resource);
                this.patient_name = (response.data.entry[0].resource.name);
                console.log(this.patient_name);
            }
        }, (err) => {
            console.log(err);
        });
    }

    myStringify(obj: any): string {
        return JSON.stringify(obj, null, '  ');
    }
*/
    ngOnInit() {
        // Add the register-page class to the body
        // $('body').addClass(this.bodyClasses);
        this.body.classList.add(this.bodyClasses);   // add the class

        this.icheck = jQuery('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });
    }

    // FORM DATA
    onSubmit() {
        this.submitted = true;
    }

    onEdit() {
        this.editing = true;
        $('.disabled-input').removeAttr('disabled');
        $('.disabled-select').removeAttr('disabled');
    }

    onSave(model) {
        this.model.last_name = model.last_name;
        this.editing = false;
        $('.disabled-input').attr('disabled', 'disabled');
        $('.disabled-select').attr('disabled', 'disabled');
    }
}
