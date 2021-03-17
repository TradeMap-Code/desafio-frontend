import { Options } from "highcharts";


export const donutChartOptions4: Options = {


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
        text: 'Júnior Chagas',
        
    },




    legend: {

        enabled: false,
    },


    series: [

        {
            type: 'pie',
            
            data: [

                {name: 'JavaScript', y: 5, color: '#f0db4f'},
                {name: 'Angular', y: 5, color: '#a6120d'},
                {name: 'CSS', y: 5, color: '#264de4'},
                {name: 'HTML5', y: 5, color: '#e34c26'},
                {name: 'Nodejs', y: 5, color: '#3c873a'}

            ],
        },
    ],
};