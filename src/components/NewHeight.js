import React from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Height Graph (Boys)",
    // subcaption: "2010-2014",
    xaxisname: "Age in years",
    pyaxisname: "Height in cm",
    syaxisname: "Percentile",
    snumbersuffix: "M",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "2010"
        },
        {
          label: "2011"
        },
        {
          label: "2012"
        },
        {
          label: "2013"
        },
        {
          label: "2014"
        },
        {
            label: "2015"
        },
        {
            label: "2016"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "P03 and below",
      data: [
        {
          value: "41656762"
        },
        {
          value: "39327714"
        },
        {
          value: "34761848"
        },
        {
          value: "36077545"
        },
        {
          value: "35993151"
        },
        {
            value: "35993151"
        },
        {
            value: "35993151"
        }
      ]
    },
    {
      seriesname: "P03 to P10",
      data: [
        {
          value: "25623035"
        },
        {
          value: "25588952"
        },
        {
          value: "25212289"
        },
        {
          value: "25418495"
        },
        {
          value: "25690310"
        },
        {
            value: "25690310"
        },
        {
            value: "25690310"
        }
      ]
    },
    {
      seriesname: "P10 and above",
      data: [
        {
          value: "49267013"
        },
        {
          value: "50029967"
        },
        {
          value: "52276699"
        },
        {
          value: "53716269"
        },
        {
          value: "55026395"
        },
        {
            value: "55026395"
        },
        {
            value: "55026395"
        }
      ]
    },
    // {
    //   seriesname: "LPG",
    //   data: [
    //     {
    //       value: "5641972"
    //     },
    //     {
    //       value: "5677909"
    //     },
    //     {
    //       value: "5823618"
    //     },
    //     {
    //       value: "6333475"
    //     },
    //     {
    //       value: "6180102"
    //     }
    //   ]
    // },
    {
      seriesname: "Students",
      renderas: "line",
      showanchors: "1",
      parentyaxis: "S",
      showvalues: "0",
      data: [
        {
          value: "3386.97"
        },
        {
          value: "3571.81‬"
        },
        {
          value: "5370.72‬"
        },
        {
          value: "5658.28‬"
        },
        {
          value: "5974.85‬‬"
        },
        {
          value: "3277.86‬"
        },
        {
            value: "1452.75"
        }
      ]
    }
  ]
};

class NewHeight extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="stackedarea2dlinedy"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default NewHeight;
