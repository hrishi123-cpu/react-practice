
import React, { Component } from 'react'

// Event binding has four approches
// 1. Binding in render
// 2. Use arrow function in render
// 3. Binding in class constructor
// 4. Class property as arrow function



 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message: 'hello'
         }
         //Approch no 3
        //  this.Clickhandler=this.Clickhandler.bind(this)
     }
     Clickhandler(){
         this.setState({
             message: 'Goodby'
         })
     }

    //Approch no 4
    // Clickhandler=()=>{
    //     this.setState({
    //         message: "goodby"
    //     })
    // } 

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* Approch no 1 */}
                {/* <button onClick={this.Clickhandler.bind(this)}>Click</button> */} 


                {/* Approch no 2 */}
                <button onClick={()=> this.Clickhandler()}>Click</button>  


                   {/* Approch no 3 and 4  */}
                {/* <button onClick={ this.Clickhandler}>Click</button> */}
            </div>
        )
    }
}

export default EventBind
