import React from 'react';
import {Doughnut} from 'react-chartjs-2'



const DoughnutChart = () => {

    const data = {
        labels: ['Full Body Split', 'Calisthenics', 'Core Strength', 'Strength & Conditioning' ],
        datasets: [
          {
            label: 'Sales',
            data: [19, 12, 5, 3],
            backgroundColor: [
              'rgba(0, 60, 48, 1)',
              'rgba(48,78,108, 1)',
              'rgba(81, 145, 138, 1)',
              'rgba(144, 161, 196, 1)'
            ],
          },
        ],
      }

      const options = {
        maintainAspectRatio: false,
        responsive: true,
        layout: {
          padding: {
            right: window.innerWidth < 768 ? 30 : 20,
            left: 20,
            top: 20,
            bottom: 20
          }
        },
        title: {
            display: true,
            text: 'Sales this Month',
            position: window.innerWidth < 500 ? 'top' : 'left',
            fontSize: 16,
        },
        legend: {
            display: window.innerWidth < 500 ? false : true,
            position: 'right',
            align: 'center',
            labels: {
                fontSize: 14,
                boxWidth: 40,
                boxHeight: 40,
                padding: 20,
            }
        }
      }

    return(
        <Doughnut data={data} options={options}/>
    )
}


export default DoughnutChart;