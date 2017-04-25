import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';

import {AdminComponent} from './admin.component';
import {Dashboard1Component} from './dashboard1/dashboard1.component';
import {DataFormComponent as PersonalData} from './personal-data/data-form.component';
import {TestFormComponent} from './personal-data/test-form.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'admin',
                component: AdminComponent,
                children: [
                    {
                        path: '',
                        component: Dashboard1Component
                    },
                    {
                        path: 'dashboard1',
                        component: Dashboard1Component
                    },
                    {
                        path: 'personal-data',
                        component: PersonalData
                    },
                    {
                        path: 'test',
                        component: TestFormComponent
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {
}
