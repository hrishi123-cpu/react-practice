import React, { Component } from 'react'
import LifecycleB from './LifecycleB '

 class LifecycleA extends Component {

     constructor(props) {
         super(props)
     
         this.state = {
              name : 'hrishi'
         }
         console.log('Lifecycle A constructor')
     }

     static getDerivedStateFromProps(props,state){
         console.log('Life Cycle A getDerivedStateFromProps')
         return null 
     }

     componentDidMount(){
         console.log(' Life Cycle A componentDidMount')
     }

    render() {
        console.log('Life cycle A Render()')
        return (
            <div>
               <div>Life Cycle A </div>
               <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default LifecycleA
