import './App.css';
import React, {Component} from 'react';
import Greet from './components/Greet'

class App extends Component{
    render(){
  return (
    <div className="App">
      <h1>Hello this is my first app </h1>
      <Greet/>
    </div>
  );
}

}


export default App;
