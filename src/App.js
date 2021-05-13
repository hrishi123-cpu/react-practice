import './App.css';
import React, {Component} from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Count from './components/Counter'

class App extends Component{
    render(){
  return (
    <div className="App">
         {/* <Message>
        </Message> */}
        {/* <Count></Count> */}
      {/* <h1>Hello this is my first app </h1> */}

      {/* <Greet name="Hrishi" heroname="ironman">
        <p>This is children props</p>
      </Greet>
      <Greet name=" abhi" heroname="superman">
        <button>hii</button>
      </Greet> */}
      {/* <Greet name="jay" heroname="thor"></Greet> */}


      <Welcome name="Hrishi"></Welcome>
      <Welcome name=" abhi"></Welcome>
      <Welcome name="jay"></Welcome>
      {/* <Hello></Hello> */}

   
    </div>
  );
}

}


export default App;
