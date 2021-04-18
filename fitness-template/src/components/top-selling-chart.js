import React from 'react';
import { Doughnut, Pie} from 'react-chartjs-2';


const TopSelling = () => {
    const data = {
        labels: ['Full Body Split'],
        datasets: [
          {
            label: 'Top Selling',
            data: [1000],
            backgroundColor: ['rgba(133, 187, 101, 1)',],
          },
        ],
      }
    const options = {
        maintainAspectRatio: true,
        legend: {
           display: false,
        }
    }

    return(
        <Pie data={data} options={options}/>
    )
}

export default TopSelling;