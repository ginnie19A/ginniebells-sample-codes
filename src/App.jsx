import React, { Component } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
        <Header />
        <Body />
        <Footer />
        </div>
      </div>
     
        
    );
  }
}

export default App;
