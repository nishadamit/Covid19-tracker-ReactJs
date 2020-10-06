import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Container} from 'semantic-ui-react';


class GlobalChart extends Component {


    render() {
    //   console.log("props",this.props)

        return (
            <Container style={{marginTop:"1.5%"}} >
                <HighchartsReact highcharts={Highcharts} options={this.props.chartdata} />
                <hr/>
            </Container>
        )
    }
}

export default GlobalChart
