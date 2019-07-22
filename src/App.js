import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import './App.css';
import Locationlist from './components/LocationList';
import ForeCastExtended from './components/ForeCastExtended';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Lima,pe',
];

class App extends Component{
  
  constructor(){
    super();
    this.state = {city: null};
  }

  handleSelectedLocation = city => {
    this.setState({city: city});
  }
  render(){
    const {city} = this.state; 
    return (
  
    <Grid>
      <Row>
        <AppBar position='sticky' >
          <Toolbar>
            <Typography variant='title' color='inherit'>
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>

      </Row>
        <Row>
          <Col xs = {12} md={6} >
          <Locationlist cities={cities}
            onSelectedLocation = {this.handleSelectedLocation}></Locationlist> 
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
             <div className="details">
               {
                 !city ? 
               <h2>No se ha seleccionado ciudad</h2> : 
               <ForeCastExtended city={city}></ForeCastExtended>
               }
             </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
   );
  }
}

export default App;
