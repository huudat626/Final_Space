import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzCardModule } from 'ng-zorro-antd/card';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/layouts/home/home.component';
import { Service } from './services/services';
import { ItemComponent } from './modules/layouts/home/item/item.component';
import { HomeServicesService } from './modules/layouts/home/home_services/home-services.service';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ItemIdComponent } from './modules/layouts/home/item-id/item-id.component';


registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent,
    ItemIdComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NzCardModule,
    AppRoutingModule,


  ],
  providers: [Service,
    HomeServicesService,
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
