import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import {TransLabelComponent} from './trans-label.component';
import { TRANSLATION_PROVIDERS }   from './translate/translations';
import { TranslatePipe }   from './translate/translate.pipe';
import { TranslateService }   from './translate/translate.service';


import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
// import { AdminComponent} from './admin/admin.component';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    TransLabelComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    RouterModule,
    AppRoutingModule
  ],
  providers:    [ TRANSLATION_PROVIDERS, TranslateService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
