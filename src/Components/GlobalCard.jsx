import React from 'react';
import { Container, Button,Grid ,Form,Header,Card} from 'semantic-ui-react';

function GlobalCard(props) {

    // console.log(props.data)
    console.log("date",new Date())

    GetDate()

    return (
        <Container className="global-card" >
            <Grid >
                <Grid.Row className="global-card-alignment" >
                      <Grid.Column mobile={16} largeScreen={3} >
                             <Card fluid >
                              <Card.Content>
                                  <p>Infected</p>
                                  <p style={{fontSize:"25px",fontWeight:"bold"}} >{new Intl.NumberFormat().format(props.data[0])}</p>
                                  <p>{GetDate()}</p>
                                  <p>Number of active cases of COVID-19</p>   
                                  <p style={{fontWeight:"bold",fontSize:"1.3rem"}} >{props.country}</p>
                               </Card.Content>
                               <Card.Content style={{padding:"0px"}} >
                                   <div style={{backgroundColor:"#6495ED",color:"#6495ED"}} >hello</div>
                               </Card.Content>
                             </Card>
                      </Grid.Column>
                      <Grid.Column  mobile={16} largeScreen={3} >
                      <Card fluid >
                              <Card.Content>
                                  <p>Recovered</p>
                                  <p style={{fontSize:"25px",fontWeight:"bold"}} >{new Intl.NumberFormat().format(props.data[1])}</p>
                                  <p>{GetDate()}</p>
                                  <p>Number of active cases of COVID-19</p>   
                                  <p style={{fontWeight:"bold",fontSize:"1.3rem"}} >{props.country}</p>
                               </Card.Content>
                               <Card.Content style={{padding:"0px"}} >
                                   <div style={{backgroundColor:"#a6c96a",color:"#a6c96a"}} >hello</div>
                               </Card.Content>
                             </Card>
                      </Grid.Column>
                      <Grid.Column mobile={16} largeScreen={3} >
                      <Card fluid >
                              <Card.Content>
                                  <p>Death</p>
                                   <p style={{fontSize:"25px",fontWeight:"bold"}} >{new Intl.NumberFormat().format(props.data[2])}</p>
                                   <p>{GetDate()}</p>
                                  <p>Number of active cases of COVID-19</p>   
                                  <p style={{fontWeight:"bold",fontSize:"1.3rem"}} >{props.country}</p>
                               </Card.Content>
                               <Card.Content style={{padding:"0px"}} >
                                   <div style={{backgroundColor:"#c42525",color:"#c42525"}} >hello</div>
                               </Card.Content>
                             </Card>
                       </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

function GetDate()
{
    var d = new Date()

    var days = ["sun","mon","tue","wed","thru","fri","sat"]
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

    var day = days[d.getDay()];
    var month = months[d.getMonth()];
    var date = d.getDate();
    var year = d.getFullYear()

    var fulldate = `${day} ${month} ${date} ${year} `

    return fulldate
}

export default GlobalCard
