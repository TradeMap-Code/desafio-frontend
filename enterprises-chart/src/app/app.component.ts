
/* Angular Components */

import { Component } from '@angular/core';

import { Chart } from 'angular-highcharts';


/* All Charts Imports */

import { donutChartOptions1 } from './helper/donutChartOptions1';

import { donutChartOptions2 } from './helper/donutChartOptions2';

import { donutChartOptions3 } from './helper/donutChartOptions3';

import { donutChartOptions4 } from './helper/donutChartOptions4';

import { donutChartOptions5 } from './helper/donutChartOptions5';

import { donutChartOptions } from './helper/donutpChartOptions';


/* Icons Import */

import { faStar } from '@fortawesome/free-solid-svg-icons';

import { faCode } from '@fortawesome/free-solid-svg-icons';

@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  /* Charts  */

  chart = new Chart(donutChartOptions);

  chart1 = new Chart(donutChartOptions1);

  chart2 = new Chart(donutChartOptions2);

  chart3 = new Chart(donutChartOptions3);

  chart4 = new Chart(donutChartOptions4);

  chart5 = new Chart(donutChartOptions5);


  /* Icons */

  faStar = faStar;

  faCode= faCode;


}
