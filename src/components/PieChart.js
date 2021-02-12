import React from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Color Blindness (Boys)",
    // subcaption: "For a net-worth of $1M",
    showvalues: "1",
    showpercentintooltip: "1",
    numberprefix: "",
    numbersuffix: "%",
    enablemultislicing: "1",
    theme: "fusion",
    "showlegend": "1",
    "smartLineColor": "#ff0000",
    "smartLineThickness": "2",
    "smartLineAlpha": "100",
    "isSmartLineSlanted": "0",
    "pieRadius": "100",
    "isSliced": "",
    "slicingDistance": "60",
    "use3DLighting": "1",
    "radius3D": "150"
  },
  data: [
    {
      label: "No Colorblind",
      value: "94"
    },
    {
      label: "Colorblind",
      value: "6"
    },
  ]
};

class PieChart extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="pie3d"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default PieChart;
