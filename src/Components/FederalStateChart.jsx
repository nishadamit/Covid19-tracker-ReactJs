import React, { Component } from 'react';
import { Container} from 'semantic-ui-react';
import axios from 'axios';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export class FederalStateChart extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             chartdata:{

                title: {
                    text: 'Solar Employment Growth by Sector, 2010-2016'
                },
            
                subtitle: {
                    text: 'Source: thesolarfoundation.com'
                },
            
                yAxis: {
                    title: {
                        text: 'Number of Employees'
                    }
                },
            
                xAxis: {
                    accessibility: {
                        rangeDescription: 'Range: 2010 to 2017'
                    }
                },
            
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },
            
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 2010
                    }
                },
            
                series: [
                    {
                    name: 'Baden-Württemberg',
                    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                   },
                   {
                    name: 'Bavaria',
                    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                   },
                   {
                      name: 'Berlin',
                      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                  },
                   {
                    name: 'Brandenburg',
                    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
                  },
                  {
                    name: 'Bremen',
                    data: [0]
                 },
                 {
                    name: 'Hamburg',
                    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                   },
                   {
                    name: 'Hesse',
                    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                   },
                   {
                      name: 'Lower Saxony',
                      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                  },
                   {
                    name: 'Mecklenburg-Vorpommern',
                    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
                  },
                  {
                    name: 'North Rhine-Westphalia',
                    data: [0]
                 },
                 {
                    name: 'Rhineland-Palatinate',
                    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                   },
                   {
                    name: 'Saarland',
                    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                   },
                   {
                      name: 'Saxony',
                      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                  },
                   {
                    name: 'Saxony-Anhalt',
                    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
                  },
                  {
                    name: 'Schleswig-Holstein',
                    data: [0]
                 },
                 {
                   name: 'Thuringia',
                   data: [0]
                }
            ],
            
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }
            
            }
        }
    }
    

    componentDidMount()
    {
        axios.get('https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
             .then((response) =>{
                response.data.features.map((data) =>{
                    //  console.log("state",data.attributes.Bundesland)
                })
             })
    }

    render() {
        return (
            <Container>
                <HighchartsReact highcharts={Highcharts} options={this.state.chartdata} />
            </Container>
        )
    }
}

export default FederalStateChart
