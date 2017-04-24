/**
 * Created by R00056 on 24/04/2017.
 */
import {Component} from '@angular/core';
import {DataUser}    from './data-user';

@Component({
    selector: 'new-user',
    templateUrl: './new-user.component.html'
})
export class NewUserComponent {
    countries = ['-Choose your country-', 'Spain', 'United States'];
    cities = ['-Choose your city-', 'Madrid', 'Valencia'];
    counties = ['-Choose your county-', 'Galapagar', 'Las Rozas', 'Majadahonda'];
    phone_types_1 = ['-Mobile/Home/Work-', 'Mobile', 'Home', 'Work'];
    phone_types_2 = ['-Mobile/Home/Work-', 'Mobile', 'Home', 'Work'];

    model = new DataUser(
        this.countries[0],
        this.cities[0],
        this.counties[0],
        '',
        this.phone_types_1[0],
        this.phone_types_2[0],
        '',
        ''
    );
}
