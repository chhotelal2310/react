import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

const ParentAB = () => {
    const [name, setName] = useState("")
    return (
        <div>
            <ChildA name={name} setName={setName}/>
            <ChildB name={name}/>
        </div>
    )
}

export default ParentAB