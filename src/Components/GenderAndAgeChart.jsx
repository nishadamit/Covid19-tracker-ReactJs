import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';


import { Container} from 'semantic-ui-react';

export class GenderAndAgeChart extends Component {

    componentDidMount()
    {
 
        var chartdata =   [
                                {
                                    male:0,
                                    female:0
                                },
                                {
                                    male:0,
                                    female:0
                                },
                                {
                                    male:0,
                                    female:0
                                },
                                {
                                    male:0,
                                    female:0
                                },
                                {
                                    male:0,
                                    female:0
                                },
                                {
                                    male:0,
                                    female:0
                                }
                            ]


axios.get('https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
     .then((response) =>{
        //  console.log("response",response.data.features)
        response.data.features.map((data,index) =>{
            //  console.log("data",data.attributes)
             var gender = data.attributes.Geschlecht;
             var ageRange = data.attributes.Altersgruppe;
            //  console.log(ageRange,gender,index)
            var a =  ageRange.slice(1,3);
            var b = ageRange.slice(5)
            // console.log(a,b,index)

            if( a >79){
                if(gender == 'M')
                {
                    chartdata[5].male++
                }else{
                    chartdata[5].female++
                }

            }else if(a >= 5 && b <= 14){

                if(gender == 'M')
                {
                    chartdata[1].male++
                }else{
                    chartdata[1].female++
                }

            }else if(a >= 15 && b <= 34){
                if(gender == 'M')
                {
                    chartdata[2].male++
                }else{
                    chartdata[2].female++
                }

            }else if(a >= 35 && b <= 59){
                if(gender == 'M')
                {
                    chartdata[3].male++
                }else{
                    chartdata[3].female++
                }

            }else if(a >= 60 && b <= 79){
                if(gender == 'M')
                {
                    chartdata[4].male++
                }else{
                    chartdata[4].female++
                }

            }else if(a >= 0 && b <= 4){
                console.log("object")
                if(gender == 'M')
                {
                    chartdata[0].male++
                }else{
                    chartdata[0].female++
                }

            }
        })
        return chartdata;
     })
     .then((response) =>{
         var male = []
         var female = []
        
         response.map((data) =>{
            //  console.log("data",data.male)
             male.push(data.male)
             female.push(data.female)
         })

         return [male,female]

     })
     .then((response) =>{
        //  console.log("response",response)
         this.setState({chartdata:{...this.state.chartdata,series:[{data:[...response[0]]},{data:[...response[1]]}]}})

     })


    }

    constructor(props) {
        super(props)
    
        this.state = {
             chartdata:{
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'AGE AND GENDER COVID-19 CASES'
                },

                // subtitle: {
                //     text: 'Source: WorldClimate.com'
                // },
                xAxis: {
                    categories: [
                        '00-04',
                        '05-14',
                        '15-34',
                        '35-59',
                        '60-79',
                        '80-above'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'CASES'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [
                    {
                    name: 'male',
                    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0]
            
                }, 
                {
                    name: 'female',
                    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5]
            
                }
            ]
            }
        }
    }
    

    render() {
        return (
            <Container>
                <HighchartsReact highcharts={Highcharts} options={this.state.chartdata} />
                <hr/>
            </Container>
        )
    }
}

export default GenderAndAgeChart

// "start": "serve -s build"
