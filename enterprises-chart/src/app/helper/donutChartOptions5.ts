import { Options } from "highcharts";


export const donutChartOptions5: Options = {


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
        text: 'Helena Alves',
        
    },




    legend: {

        enabled: false,
    },


    series: [

        {
            type: 'pie',
            
            data: [

                {name: 'JavaScript', y: 6, color: '#f0db4f'},
                {name: 'Angular', y: 0.5, color: '#a6120d'},
                {name: 'CSS', y: 3, color: '#264de4'},
                {name: 'HTML5', y: 7, color: '#e34c26'},
                {name: 'Nodejs', y: 10, color: '#3c873a'}

            ],
        },
    ],
};