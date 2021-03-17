
/* Necessary Imports */

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


/* Chart imports */

import { ChartModule } from 'angular-highcharts';


/* Browse Animations */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/* Icon Imports */

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({

  declarations: [

    AppComponent
  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    ChartModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
