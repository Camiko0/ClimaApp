import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import {Grid, Col, Row} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ForecastExtended from './components/ForecastExtended';

const cities =  [
  'Munich',
  'Londres',
  'New York',
  'Barcelona',
  'Mexico',
];


class App extends Component {

constructor(){
  super();
  this.state={
    city:"nueva ciudad",
  };
}

  handleSelectedLocation = city => {
    this.setState({city});
    console.log(`handleselectionlocation ${city}`);
  }

render(){
    const {city} =this.state;
  return(
    <Grid>
      <Row>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <LocationList cities = {cities} 
        onSelectedLocation ={this.handleSelectedLocation}/>
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation = {4}> 
            <div className="details">
                <ForecastExtended city={city}/>
            </div>
          </Paper>  
        </Col>
      </Row> 
    </Grid>
  )
}


}


export default App;
