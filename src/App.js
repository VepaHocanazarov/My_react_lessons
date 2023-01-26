import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
   render()
   {
    const sayi = 25;
    const dogrumu = true
    return (



      <div className="App">
        Merhaba Dünya

        <h1>Vepa</h1>

        <label htmlFor=""></label>
        <h4>{2+2}</h4>

       { "vepa".toUpperCase()}

       <h4>{sayi}</h4>

       {
        dogrumu ? <p>Kullanici Var</p>  : <p>Kullanici Yok</p>
       }

      </div>

    );
  }
   }


export default App;
