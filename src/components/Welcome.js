import React,{Component} from 'react'
//Class Component

// class Welcome extends Component{
//     render(){
//         return <h1 >Welcome {this.props.name}</h1>
//     }
// }

//-----------------------------------------------------------------------------------
//Desrtuctureing props
class Welcome extends Component{
    render(){
        const {name}=this.props
        return (
        <h1 >Welcome {name}</h1>
        )
    }
}
export default Welcome;