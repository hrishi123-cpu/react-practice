import React from 'react'

function ChildCompoent(props) {
    return (
        <div>
           <button onClick={() => props.greetHandler('child')}>Green Parent</button>
        </div>
    )
}

export default ChildCompoent
