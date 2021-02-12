import React from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Vision Issues",
    subcaption: "Boys and Girls",
    yaxisname: "No. of students affected",
    palettecolors: "#E64571, #88D786",
    plotgradientcolor: " ",
    theme: "candy",
    yaxismaxvalue: "30",
    numdivlines: "2",
    showlegend: "1",
    interactivelegend: "0",
    showvalues: "0",
    showsum: "0"
  },
  categories: [
    {
      category: [
        {
          label: "Class 1"
        },
        {
          label: "Class 2"
        },
        {
          label: "Class 3"
        },
        {
          label: "Class 4"
        },
        {
          label: "Class 5"
        },
        {
          label: "Class 6"
        },
        {
          label: "Class 7"
        },
        {
          label: "Class 8"
        },
        {
          label: "Class 9"
        },
        {
          label: "Class 10"
        },
        // {
        //   label: "J.King"
        // },
        // {
        //   label: "O.Giroud"
        // },
        // {
        //   label: "R.Nainggolan"
        // },
        // {
        //   label: "A.Robben"
        // },
        // {
        //   label: "Pablo Sarabia"
        // },
        // {
        //   label: "Isco"
        // },
        // {
        //   label: "Rafinha"
        // },
        // {
        //   label: "F.Bernardeschi"
        // }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Boys",
      data: [
        {
          value: "25"
        },
        {
          value: "18"
        },
        {
          value: "17"
        },
        {
          value: "15"
        },
        {
          value: "16"
        },
        {
          value: "14"
        },
        {
          value: "13"
        },
        {
          value: "11"
        },
        {
          value: "9"
        },
        {
          value: "10"
        },
        // {
        //   value: "10"
        // },
        // {
        //   value: "7"
        // },
        // {
        //   value: "8"
        // },
        // {
        //   value: "8"
        // },
        // {
        //   value: "7"
        // },
        // {
        //   value: "6"
        // },
        // {
        //   value: "6"
        // },
        // {
        //   value: "3"
        // }
      ]
    },
    {
      seriesname: "Girls",
      data: [
        {
          value: "5"
        },
        {
          value: "8"
        },
        {
          value: "6"
        },
        {
          value: "3"
        },
        {
          value: "2"
        },
        {
          value: "3"
        },
        {
          value: "3"
        },
        {
          value: "4"
        },
        {
          value: "5"
        },
        {
          value: "4"
        },
        // {
        //   value: "3"
        // },
        // {
        //   value: "4"
        // },
        // {
        //   value: "2"
        // },
        // {
        //   value: "3"
        // },
        // {
        //   value: "3"
        // },
        // {
        //   value: "4"
        // },
        // {
        //   value: "2"
        // },
        // {
        //   value: "4"
        // }
      ]
    }
  ],
//   annotations: {
//     groups: [
//       {
//         id: "infobar",
//         items: [
//           {
//             id: "1",
//             type: "line",
//             x: "$dataset.1.set.1.endx+10",
//             y: "$dataset.1.set.1.y",
//             tox: "$dataset.1.set.1.endx+50",
//             toy: "$dataset.1.set.1.y",
//             color: "#2F9AC4",
//             dashed: "0",
//             thickness: "1"
//           },
//           {
//             id: "2",
//             type: "line",
//             x: "$dataset.1.set.1.endx+50",
//             y: "$dataset.1.set.1.y",
//             tox: "$dataset.1.set.1.endx+50",
//             toy: "$dataset.0.set.1.y+50",
//             color: "#2F9AC4",
//             dashed: "0",
//             thickness: "1"
//           },
//           {
//             id: "3",
//             type: "line",
//             x: "$dataset.1.set.17.endx+5",
//             y: "$dataset.1.set.17.y",
//             tox: "$dataset.1.set.17.endx+200",
//             toy: "$dataset.0.set.17.y",
//             color: "#2F9AC4",
//             dashed: "0",
//             thickness: "1"
//           },
//           {
//             id: "4",
//             type: "line",
//             x: "$dataset.1.set.17.endx+200",
//             y: "$dataset.0.set.17.y",
//             tox: "$dataset.1.set.17.endx+200",
//             toy: "$dataset.0.set.17.y-40",
//             color: "#2F9AC4",
//             dashed: "0",
//             thickness: "1"
//           },
//           {
//             id: "shape",
//             type: "polygon",
//             startangle: "180",
//             sides: "3",
//             radius: "6",
//             color: "#2F9AC4",
//             x: "$dataset.1.set.17.endx+10",
//             y: "$dataset.1.set.17.y"
//           },
//           {
//             id: "shape",
//             type: "polygon",
//             startangle: "180",
//             sides: "3",
//             radius: "6",
//             color: "2F9AC4",
//             x: "$dataset.1.set.1.endx+10",
//             y: "$dataset.1.set.1.y"
//           },
//           {
//             id: "label1",
//             align: "RiGHT",
//             type: "text",
//             // text: "Messi added{br}roughly 7 Goals from{br}his shot quality",
//             fillcolor: "#2F9AC4",
//             rotate: "90",
//             x: "$dataset.1.set.1.endx+65",
//             y: "$dataset.0.set.5.y"
//           },
//           {
//             id: "label2",
//             align: "CENTER",
//             type: "text",
//             // text:
//             //   "Bernardeschi{br}more than doubled{br}his chance quality{br}through shooting",
//             fillcolor: "#2F9AC4",
//             rotate: "90",
//             x: "$dataset.1.set.17.endx+200",
//             y: "$dataset.0.set.13.y"
//           }
//         ]
//       }
//     ]
//   }
};

class Hearing extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="stackedbar3d"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default Hearing;
