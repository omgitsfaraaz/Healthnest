import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

// function generateDayWiseTimeSeries(baseval, count, yrange) {
//     var i = 0;
//     var series = [];
//     while (i < count) {
//         var x = baseval;
//         var y =
//           Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
//           yrange.min;

//         series.push([x, y]);
//         baseval += 86400000;
//         i++;
//     }
//     return series;
// }

class BoysHeight extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
            series: [
              {
                name: 'P10 and above : Normal Growth',
                data: [30, 44, 55, 60, 62, 65, 67, 68, 69, 70, 74, 75, 84, 88, 90, 93, 95],
                type: 'area',
              },
              {
                name: 'P03 to P10 : Below Normal Growth',
                data: [84, 169],
                type: 'area'
              },
              {
                name: 'Vaishali',
                type: 'line',
                data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33, 55, 69, 45, 61, 43, 54]
              },
              {
                name: 'Class 2',
                type: 'scatter',
                data: [53, 10, 55, 30, 60, 82, 67, 1, 40, 89, 84, 11, 20, 41, 93, 20, 55]
              },
            ],
            options: {
              chart: {
                type: 'area',
                height: 380,
                stacked: false,
                // events: {
                //   selection: function (chart, e) {
                //     console.log(new Date(e.xaxis.min))
                //   }
                // },
              },
              colors: ['#008FFB', '#00E396', '#8e44ad', '#e84118'],
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              fill: {
                type: 'gradient',
                gradient: {
                  opacityFrom: 0.6,
                  opacityTo: 0.8,
                }
              },
              legend: {
                position: 'top',
                horizontalAlign: 'left'
              },
              xaxis: {
                  categories: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
              },
              yaxis: [
                  {
                      title: {
                          text: 'Height in cm',
                      },
                  },
                  {
                      opposite: true,
                      title: {
                          text: 'Percentile',
                      }
                  }
              ]
            },
          
          
        };
    }

    render() {
        return (
            <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                height={380}
                type="scatter"
                // width={400}
            />
        )
    }
}

export default BoysHeight;