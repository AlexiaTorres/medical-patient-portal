import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from '../admin-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from 'angular2-schema-form';
import { DataFormComponent } from './data-form.component';
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule,
        SchemaFormModule,
        BrowserModule,
        HttpModule
    ],
    declarations: [
        DataFormComponent
    ],
    providers: [{provide: WidgetRegistry, useClass: DefaultWidgetRegistry}],
    exports: [DataFormComponent]
})
export class DataFormModule {
}
