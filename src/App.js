
// import './App.css';
import { Component } from 'react';
import Vepa from './Vepa';
import Aygul from './Aygul';
import './deneme.css'



class App extends Component {
  render() {

    return (
      <div className="container">
       <h1>Merhaba Dünya</h1>

        <Vepa /> 
        <Aygul/>

      </div>
 
    );
  }
}


export default App;
