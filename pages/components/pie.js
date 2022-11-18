import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export function PieChart(props) {

    const data = {
        labels: props.labels,
        datasets: [
          {
            label: '# of Votes',
            data: props.data,
            backgroundColor: [
              '#eeaeca',
              '#cab3d7',
              '#a6b8e3',
              '#90b2d3',
              '#68a8b5',
              '#3f9e97',
              '#7fbec7',
              '#7faec7',
              '#ceb2d5',
              '#d991b0',

            ],
            borderColor: [
                'rgba(255,255,255,.3)'
            ],
            borderWidth: 1,
          },
        ],
      }
      const options =  {
        plugins: {
           legend: {
              display: false
           }
        },}

  return( <Pie data={data} options={options}/>)
}
