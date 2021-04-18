import React from 'react';
import {Line} from 'react-chartjs-2';


const LineChart = () => {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Total Sales',
                data: [50, 20, 22, 15, 55, 12],
                pointBackgroundColor: "rgba(133,187, 101, 1)",
                borderColor: "rgba(133,187, 101, 1)",
                borderWidth: 1.5,
                fill: false,
                backgroundColor: 'rgba(133,187, 101, 1)'
            }, { 
                label: 'Program 1',
                data: [22, 6, 11, 4, 24, 8],
                pointBackgroundColor: "rgba(0, 60, 48, 1)",
                borderColor: "rgba(0, 60, 48, 1)",
                borderWidth: 1.5,
                fill: false,
                backgroundColor: 'rgba(0, 60, 48, 1)'
            }, { 
                label: 'Program 2',
                data: [0, 1, 1, 0, 1, 1],
                pointBackgroundColor: "rgba(48,78,108, 1)",
                borderColor: "rgba(48,78,108, 1)",
                borderWidth: 1.5,
                fill: false,
                backgroundColor: 'rgba(48,78,108, 1)'
            },
            { 
                label: 'Program 3',
                data: [22, 6, 11, 4, 24, 8],
                pointBackgroundColor: "rgba(81, 145, 138, 1)",
                borderColor: "rgba(81, 145, 138, 1)",
                borderWidth: 1.5,
                fill: false,
                backgroundColor: 'rgba(81, 145, 138, 1)'
            },  
            { 
                label: 'Program 4',
                data: [22, 6, 11, 4, 24, 8],
                pointBackgroundColor: "rgba(144, 161, 196, 1)",
                borderColor: "rgba(144, 161, 196, 1)",
                borderWidth: 1.5,
                fill: false,
                backgroundColor: 'rgba(144, 161, 196, 1)'
            },  
        ]
    }

    const options = {
        maintainAspectRatio: false,
        layout: {
            padding: window.innerWidth < 1120 ? 5 : 15,
        },
        title: {
            display: true,
            text: 'Sales per Month',
            position: 'top',
            fontSize: 16
        },
        legend: {
            display: window.innerWidth < 500 ? false : true,
            position: window.innerWidth < 1120 ? 'bottom' : 'right' ,
            align: 'start',
            labels: {
                fontSize: 14,
                boxWidth: 20,
                boxHeight: 20,
                padding: 15,
            },
        },
    }

    return(
        <Line data={data} options={options}/>
    )
}


export default LineChart;