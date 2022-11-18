//https://www.chartjs.org/docs/latest/axes/styling.html

import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);


export function RadarChart(props) {


    const data = {
        labels: props.labels,
        datasets: [
          {
            data: props.data,
            backgroundColor: 'rgba(9, 112, 120, .4)',
          },
        ],
    };

    const options =  {
        plugins: {
           legend: {
              display: false
           }
        },
        scales: {
            r: {
              pointLabels: {
                color: 'black'
              },
              max: 1,
              min: 0,
              ticks:{
                showLabelBackdrop: false,
                stepSize: 0.2,
                z:1,
                //color:'black'
              }
            }
        }    
      }


  return <Radar data={data} options={options}/>;
}