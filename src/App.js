import React, { Component } from 'react';
import './App.css';
import GlobalChart from './Components/GlobalChart';
import GlobalCard from './Components/GlobalCard';
import GenderAndAgeChart from './Components/GenderAndAgeChart';
import FederalStateChart from './Components/FederalStateChart';
import axios from 'axios';

class App extends Component {


  constructor(props) {
    super(props)

    this.state = {
         globalchartdata:{
            chart: {
              type: 'column'
            },
            title: {
              text: 'COVID-19 GLOBAL'
            },
            plotOptions: {
              column: {
                  colorByPoint: true
              }
          },
            series: [
              {
                data: [10000, 20000, 1000]
              }
            ]
            ,
            colors: ['#77a1e5','#a6c96a','#c42525']
          }
          // '#77a1e5'

    }
}



componentDidMount(){

  axios.get('https://disease.sh/v3/covid-19/all')
        .then((Response)=>{
             const { cases,recovered,deaths } = Response.data
             const data = [ cases,recovered,deaths]

             this.setState({globalchartdata:{...this.state.globalchartdata,series:[{data:[...data]}]}})
        })
      }

  render() {

    // console.log("app state",this.state.globalchartdata.series[0].data)

    return (
      <div>
        <h1>Covid-19</h1>
        <GlobalCard data={this.state.globalchartdata.series[0].data} />
        <GlobalChart chartdata={this.state.globalchartdata} />
        <GenderAndAgeChart />
        {/* <FederalStateChart/> */}
      </div>
    )
  }
}

export default App
