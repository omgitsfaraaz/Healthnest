import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class PopChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    background: "#f4f4f4",
                    foreColor: "#333",
                },
                xaxis: {
                    categories: [
                        "Mumbai",
                        "Delhi",
                        "Bangalore",
                        "Kolkata",
                        "Chennai",
                        "Ahmedabad",
                    ]
                },
                plotOptions: {
                    bar: {
                      horizontal: false,
                    },
                },
                fill: {
                    colors: ["#f44336"],
                },
                dataLabels: {
                    enabled: false,
                },
                title: {
                    text: "Students by population",
                    align: "center",
                    margin: 20,
                    offsetY: 20,
                },
            },
            series: [{
                name: "Population",
                data: [12691836, 10927986, 5104047, 4631392, 4328063, 3719710],
            }]
        }
    }
    onClick = () => {
        this.setState({
            options: {
                ...this.state.options,
                plotOptions: {
                    ...this.state.options.plotOptions,
                    bar: {
                        ...this.state.options.plotOptions.bar,
                        horizontal: !this.state.options.plotOptions.bar.horizontal
                    }
                }
            }
        })
    }


    render() {
        return (
            <React.Fragment>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height="450"
                    width="100%" 
                />
                <button onClick={this.onClick}>Change</button>
            </React.Fragment>
        );
    }
}

export default PopChart;