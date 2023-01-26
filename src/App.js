
// import './App.css';
import { Component } from 'react';
import Vepa from './Vepa';
import Aygul from './Aygul';
import './deneme.css'



class App extends Component {
  render() {

    const title = "React Egitimi";
    const descrition = "Daha yolun başindayiz";

    return (
      <div className="container">
       <h1>Merhaba Dünya</h1>

        <Vepa başlik = {title} aciklama = {descrition} /> 
        <Aygul/>


      </div>
 
    );
  }
}


export default App;


// Propuslar --> bir componentden diger bir componente sabit verileri aktarmak istiyorsam Propuslardan yararlanılır.
