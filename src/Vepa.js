
import React, { Component } from 'react'

class Vepa extends Component {
  render() {

    console.log(this.props);

    // const{başlik,aciklama}=this.props; --> ikinci yötem
    return (
      <div>
        <h1>{this.props.başlik}</h1>

        {/* <h1>{başlik}</h1>  --> ikinci yötem
        <p>{aciklama}</p> */}

        <p>{this.props.aciklama}</p>

        <h1>React in daha başindayiz</h1>
        <form action="">
          <input type="text" />
          <button>Kaydet</button>
        </form>
      </div>
    )
  }
}

export default Vepa;