import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props){
         super(props)

         this.state= {
             count : 0
         }
     }
     increment(){
        //  this.setState(
        //     {
        //         count : this.state.count+1
        //     },
        //     ()=>{console.log('callback value',this.state.count)}

        //  )
        this.setState((prevState)=>({
            count: prevState.count+1
        }))
     }
     incrementFive(){
         this.increment()
         this.increment()
         this.increment()
         this.increment()
         this.increment()
     }

     reset(){
         this.setState({
             count : 0
         })
     }
    render() {
        return (
            <div>
             <div>
                  count - {this.state.count}
                  </div>  
                <button onClick={()=>this.incrementFive()}>Increment</button>
                <button onClick={()=>this.reset()}>Reset</button>
            </div>
        )
    }
}

export default Counter
