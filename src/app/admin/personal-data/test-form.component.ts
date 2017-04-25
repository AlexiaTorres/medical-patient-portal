import {Component} from '@angular/core';

@Component({
    selector: 'test-form',
    // Bind the 'mySchema' member to the schema input of the Form component.
    templateUrl: './test-form.component.html',
    styleUrls: ['./data-form.component.css']
})

export class TestFormComponent {
    // The schema that will be used to generate a form
    mySchema = {
     'properties': {
     'email': {
     'type': 'string',
     'description': 'email',
     'format': 'email'
     },
     'password': {
     'type': 'string',
     'description': 'Password',
         'buttons': [{
             'id': 'reset',
             'label': 'Reset'
         }]
     },
     'rememberMe': {
     'type': 'boolean',
     'default': false,
     'description': 'Remember me'
     }
     },
     'required': ['email', 'password', 'rememberMe'],
        'buttons': [{
            'id': 'alert', // the id of the action callback
            'label': 'Alert !' // the text inside the button
        }]
     };

    myModel = {email: 'john.doe@example.com'};
    myActions = {
        'alert': (property) => {alert(JSON.stringify(property.value))},
        'reset': (property) => {property.reset()}
    };
}
