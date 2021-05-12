import './App.css';
import React, {Component} from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

class App extends Component{
    render(){
  return (
    <div className="App">
      <h1>Hello this is my first app </h1>
      <Greet/>
      <Welcome></Welcome>
      <Hello></Hello>
    </div>
  );
}

}


export default App;
