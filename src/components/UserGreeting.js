import React, { Component } from 'react'
//Conditional rendering

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {
            //4. Short circuit operator apporch
            return(
                this.state.isLoggedIn && <div>Welcome hrishi</div>
            )


            //3. ternary conditional approch
            // return(
            //     this.state.isLoggedIn ?
            //     <div>WWelcom hrishi</div> :
            //     <div>Welcome guest</div>
            // )


        //2.ELEMENT VARIALBLE APPROCH
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Hrishi</div>
        // }
        // else{
        //     message=<div>Welcome guest</div>
        // }
        // return <div>{message}</div>



        //1. IF ELSE APRROCH
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome hrishi
        //         </div>
        //     )
        // }
        // else{
        //     return(
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
      
           
        
    }
}

export default UserGreeting
