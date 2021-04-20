import React from 'react';
import { Doughnut, Pie} from 'react-chartjs-2';


const TopSelling = () => {

    const data = {
        labels: ['Full Body Split', 'Other Sales'],
        datasets: [
          {
            label: ['Top Selling', 'Other Sales'],
            data: [1000, 1500 - 1000],
            backgroundColor: ['rgba(48,78,108, 1)', 'rgba(133, 187, 101, 1)']
          },
        ],
        text: '66%'
      }
      
    const options = {
        maintainAspectRatio: true,
        responsive: true,
        legend: {
           display: false,
        },
        cutoutPercentage: 70,
    }

    return(
        <Pie data={data} options={options}/>
    )
}

export default TopSelling;