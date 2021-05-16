import './App.css';
import React, {Component} from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Count from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Namelist from './components/Namelist';
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';


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
{/* 
      <Welcome name="Hrishi"></Welcome>
      <Welcome name=" abhi"></Welcome>
      <Welcome name="jay"></Welcome> */}
      {/* <Hello></Hello> */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <Namelist></Namelist> */}
      {/* <StyleSheet primary={true}></StyleSheet> */}
      {/* <Inline></Inline> */}
      {/* <h1 className='error'> Error</h1>
      <h1 className={styles.success}> Success</h1> */}
   {/* <Form></Form> */}
   {/* <LifecycleA></LifecycleA> */}
   {/* <FragmentDemo></FragmentDemo>
   <Table></Table> */}
   <ParentComp></ParentComp>
   
    </div>
  );
}

}


export default App;
