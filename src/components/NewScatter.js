import React from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Temperature in Fahrenheit (Girls)",
    subcaption: "Sales vs. Avg. Temperature<br>Los Angeles Topanga",
    ynumbersuffix: "°F",
    yaxisminvalue: "96",
    yaxismaxvalue: "100",
    theme: "fusion",
    showlegend: "1",
    plottooltext:
      "<b>$yDataValue</b> worth <b>$seriesNames</b> were sold,<br>when temperature was <b>$xDataValue</b>",
    anchorRadius: "10"
  },
  categories: [
    {
      verticallinedashed: "1",
      verticallinedashlen: "1",
      verticallinedashgap: "1",
      verticallinethickness: "1",
      verticallinecolor: "#000000",
      category: [
        {
          y: "96",
          label: "96°F",
          showverticalline: "1"
        },
        {
          y: "97",
          label: "97°F"
        },
        {
          y: "98",
          label: "98°F"
        },
        {
          y: "99",
          label: "99°F"
        },
        {
          y: "100",
          label: "100°F"
        }
      ]
    }
  ],
  dataset: [
    {
      // "showregressionline": "1",
      // "regressionlinecolor": "#f1c40f",
      // "anchorbgcolor": "#34C3BD",
      // "anchorbordercolor": "#808080",
      seriesname: "Student",
      renderas: "scatter",
      anchorbgcolor: "5D62B5",
      data: [
        {
          x: "21",
          y: "97.8"
        },
        {
          x: "22",
          y: "98.2"
        },
        {
          x: "23",
          y: "99.4"
        },
        {
          x: "24",
          y: "96.8"
        },
        {
          x: "24",
          y: "99.3"
        },
        {
          x: "25",
          y: "97.7"
        },
        {
          x: "25",
          y: "96.8"
        },
        {
          x: "26",
          y: "96.5"
        },
        {
          x: "27",
          y: "100"
        },
        {
          x: "29",
          y: "97.1"
        },
        {
          x: "31",
          y: "96.2"
        },
        {
          x: "32",
          y: "96.1"
        },
        {
          x: "33",
          y: "96.3"
        },
        {
          x: "34",
          y: "97.3"
        },
        {
          x: "35",
          y: "97.4"
        },
        {
          x: "36",
          y: "97.3"
        },
        {
          x: "34",
          y: "98.3"
        },
        {
          x: "38",
          y: "97.9"
        },
        {
          x: "37",
          y: "98.6"
        },
        {
          x: "39",
          y: "99.2"
        },
        {
          x: "39",
          y: "98.6"
        },
        {
          x: "40",
          y: "96"
        },
        {
          x: "41",
          y: "98.7"
        },
        {
          x: "42",
          y: "100"
        },
        {
          x: "43",
          y: "98.7"
        },
        {
          x: "44",
          y: "97.3"
        },
        {
          x: "45",
          y: "97.7"
        },
        {
          x: "47",
          y: "97.8"
        },
        {
          x: "48",
          y: "97.5"
        },
        {
          x: "48",
          y: "97.1"
        },
        {
          x: "49",
          y: "99.2"
        },
        {
          x: "50",
          y: "97.4"
        },
        {
          x: "50",
          y: "96"
        },
        {
          x: "52",
          y: "96.8"
        },
        {
          x: "53",
          y: "97"
        },
        {
          x: "54",
          y: "96.9"
        },
        {
          x: "53",
          y: "99.5"
        },
        {
          x: "55",
          y: "96.9"
        },
        {
          x: "56",
          y: "97.5"
        },
        {
          x: "58",
          y: "98.7"
        },
        {
          x: "61",
          y: "99.1"
        },
        {
          x: "62",
          y: "97.1"
        },
        {
          x: "63",
          y: "96.1"
        },
        {
          x: "62",
          y: "98.7"
        },
        {
          x: "64",
          y: "99"
        },
        {
          x: "65",
          y: "96.1"
        },
        {
          x: "67",
          y: "99.6"
        },
        {
          x: "68",
          y: "97.3"
        },
        {
          x: "70",
          y: "97.9"
        },
        {
          x: "71",
          y: "99.9"
        },
        {
          x: "71",
          y: "97.6"
        },
        {
          x: "72",
          y: "97.8"
        },
        {
          x: "73",
          y: "97.3"
        },
        {
          x: "74",
          y: "98.5"
        },
        {
          x: "74",
          y: "97.6"
        },
        {
          x: "75",
          y: "98.3"
        },
        {
          x: "79",
          y: "99.8"
        },
        {
          x: "80",
          y: "97.9"
        },
        {
          x: "79",
          y: "97.5"
        },
        {
          x: "82",
          y: "98.1"
        },
        {
          x: "85",
          y: "99.3"
        },
        {
          x: "86",
          y: "99"
        },
        {
          x: "86",
          y: "98.4"
        },
        {
          x: "88",
          y: "96.9"
        },
        {
          x: "87",
          y: "98.6"
        },
        {
          x: "86",
          y: "98.9"
        },
        {
          x: "89",
          y: "98.4"
        },
        {
          x: "89",
          y: "96.2"
        },
        {
          x: "90",
          y: "99.9"
        },
        {
          x: "92",
          y: "96.3"
        },
        {
          x: "90",
          y: "96.1"
        },
        {
          x: "94",
          y: "96.9"
        },
        {
          x: "95",
          y: "98.3"
        },
        {
          x: "95",
          y: "97.4"
        },
        {
          x: "96",
          y: "100"
        },
        {
          x: "97",
          y: "99.2"
        },
        {
          x: "98",
          y: "97.9"
        }
      ],
      // "trendlines": [
      //   {
      //     "line": [
      //       {
      //         "startvalue": "98.2",
      //         "endvalue": "",
      //         "color": "#29C3BE",
      //         "displayvalue": "Average Temperature",
      //         "valueonright": "1",
      //         "dashed": "1",
      //         "thickness": "2"
      //       }
      //     ]
      //   }
      // ]
    },
    // {
    //   "seriesname": "Average Temperature 98.2°F",
    //   "renderas": "line",
    //   "data": [
    //     {
    //       "value": "98.2"
    //     },
    //     {
    //       "value": "98.2"
    //     },
    //   ]
    // }
  ]
};

class NewScatter extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="scatter"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default NewScatter;
