import { Options } from "highcharts";


export const donutChartOptions2: Options = {


    chart: {

        type: 'pie',
        plotShadow: false,
    },

    
    credits: {
        
        enabled: false,
    },


    plotOptions: {

        pie: {
            
            innerSize: '80%',
            borderWidth: 40,
            borderColor: 'null',
            slicedOffset: 20,

            dataLabels: {

                connectorWidth: 0,

            },
        },
    },


    title: {

        align: 'center',
        verticalAlign: 'middle',
        floating: true,
        text: 'Daniele Mendez',
        
    },




    legend: {

        enabled: false,
    },


    series: [

        {
            type: 'pie',
            
            data: [

                {name: 'JavaScript', y: 2, color: '#f0db4f'},
                {name: 'Angular', y: 3, color: '#a6120d'},
                {name: 'CSS', y: 5, color: '#264de4'},
                {name: 'HTML5', y: 4, color: '#e34c26'},
                {name: 'Nodejs', y: 2, color: '#3c873a'}

            ],
        },
    ],
};