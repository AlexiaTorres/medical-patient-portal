import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {MainSideComponent} from './main-side/main-side.component';
import {MainHeaderComponent} from './main-header/main-header.component';
import {FooterComponent} from './footer/footer.component';
import {ControlSidebarComponent} from './control-sidebar/control-sidebar.component';
import {Dashboard1Component} from './dashboard1/dashboard1.component';
import {DataFormComponent as PersonalData} from './personal-data/data-form.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule
    ],
    declarations: [
        AdminComponent,
        MainSideComponent,
        MainHeaderComponent,
        FooterComponent,
        ControlSidebarComponent,
        Dashboard1Component,
        PersonalData
    ],
    exports: [AdminComponent]
})
export class AdminModule {
}
