import React, {Component} from 'react';
import './App.css';
import Locationlist from './components/LocationList';


const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Lima,pe',
];

class App extends Component{
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation${city}`);
  }
  render(){
    return (
  
    <div className="App">
        <Locationlist cities={cities}
          onSelectedLocation = {this.handleSelectedLocation}></Locationlist> 
      </div>
   );
  }
}

export default App;
