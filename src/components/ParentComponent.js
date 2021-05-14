import React, { Component } from 'react'
import ChildCompoent from './ChildCompoent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    render() {
        return (
            <div>
                <ChildCompoent greetHandler ={this.greetParent}></ChildCompoent>
            </div>
        )
    }
}

export default ParentComponent
