import React, { Component } from 'react';
import './App.css';
import GlobalChart from './Components/GlobalChart';
import GlobalCard from './Components/GlobalCard';
import axios from 'axios';
import {countries} from './config/config';
import { Dropdown} from 'semantic-ui-react';

class App extends Component {


  constructor(props) {
    super(props)

    this.state = {
         globalchartdata:{
            chart: {
              type: 'column'
            },
            title: {
              text: "Germany"
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
          },
          Country:"Germany"
          // '#77a1e5'

    }
}

 onChangeCountryName = (e,data) =>{
      //  console.log("data",e,data.value)

       axios.get(`https://disease.sh/v3/covid-19/countries/${data.value}`)
       .then((Response) =>{
            // console.log("response",Response.data.country)
            const { cases,recovered,deaths } = Response.data
            const data = [ cases,recovered,deaths]

            // console.log("e data",data.value)

            this.setState({globalchartdata:{...this.state.globalchartdata,series:[{data:[...data]}],title:{text:Response.data.country}},Country:Response.data.country})
       })
}


componentDidMount(){

  axios.get('https://disease.sh/v3/covid-19/countries/germany')
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
        <img src="https://i.ibb.co/7QpKsCX/image.png" />
        <GlobalCard data={this.state.globalchartdata.series[0].data} country={this.state.Country} />
        <Dropdown
            placeholder='Germany'
            fluid
            search
            selection
            options={countries}
            onChange={this.onChangeCountryName}
          />
        <GlobalChart chartdata={this.state.globalchartdata} country={this.state.Country} />
      </div>
    )
  }
}

export default App
