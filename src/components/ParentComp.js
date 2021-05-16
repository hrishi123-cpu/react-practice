import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

 class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'hrishi'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'hrishi'
            })
        },2000)
    }
    render() {
        console.log('@@@@@@@@@@@@@@@@@@@@parent comp render@@@@@@@@@@@@@@@@@@@@@@@@')
        return (
            <div>
                Parent component
                {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp> */}
                <MemoComp name={this.state.name}></MemoComp>
            </div>
        )
    }
}

export default ParentComp
