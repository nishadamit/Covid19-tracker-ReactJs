import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Container, Button,Grid ,Form,Header,Card} from 'semantic-ui-react';
import axios from 'axios';


class GlobalChart extends Component {


    render() {

    //   console.log("props",this.props)

        return (
            <Container>
                <HighchartsReact highcharts={Highcharts} options={this.props.chartdata} />
            </Container>
        )
    }
}

export default GlobalChart
