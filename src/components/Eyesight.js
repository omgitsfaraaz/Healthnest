import React from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Boys vs Girls",
    subcaption: "ABC School",
    yaxisname: "Number of Students",
    syaxisname: "Percentile",
    snumbersuffix: "%",
    drawcustomlegendicon: "0",
    showvalues: "0",
    rotatelabels: "1",
    theme: "fusion",
    "plotHoverEffect": "1",
    "plotFillHoverColor": "#00ffaa",
    "plotBorderHoverThickness": "1",
    "plotBorderHoverDashed": "1",
    "plotBorderHoverDashLen": "6",
    "plotBorderHoverDashGap": "2",
    "labelDisplay": "rotate",
    "slantLabel": "1",
    "labelFont": "Monserrat",
    "labelFontSize": "15",
    "labelFontBold": "1",
    "labelFontColor": "#e67e22"
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
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Girls",
      data: [
        {
          value: "2046600"
        },
        {
          value: "2342300"
        },
        {
          value: "3451000"
        },
        {
          value: "3157400"
        },
        {
          value: "3046600"
        },
        {
          value: "3342300"
        },
        {
          value: "4451000"
        },
        {
          value: "5157400"
        },
        {
          value: "6046600"
        },
        {
          value: "6342300"
        }
      ]
    },
    {
      seriesname: "Boys",
      data: [
        {
          value: "6046600"
        },
        {
          value: "4342300"
        },
        {
          value: "4451000"
        },
        {
          value: "5157400"
        },
        {
          value: "4104660"
        },
        {
          value: "5342300"
        },
        {
          value: "6451000"
        },
        {
          value: "7115740"
        },
        {
          value: "8104660"
        },
        {
          value: "8134230"
        }
      ]
    },
    // {
    //   seriesname: "% Unit Share",
    //   renderas: "line",
    //   parentyaxis: "S",
    //   data: [
    //     {
    //       value: "13.2"
    //     },
    //     {
    //       value: "10.6"
    //     },
    //     {
    //       value: "19.7"
    //     },
    //     {
    //       value: "25.6"
    //     },
    //     {
    //       value: "33.2"
    //     },
    //     {
    //       value: "30.6"
    //     },
    //     {
    //       value: "32.7"
    //     },
    //     {
    //       value: "35.6"
    //     },
    //     {
    //       value: "33.2"
    //     },
    //     {
    //       value: "30.6"
    //     }
    //   ]
    // }
  ]
};

class Eyesight extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="mscolumn3dlinedy"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default Eyesight;
