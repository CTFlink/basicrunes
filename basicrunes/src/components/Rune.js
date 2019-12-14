import React from 'react'

function Rune (props) {
    
    return(
        <div classname="Rune">
            <p>{props.runobject.name}</p>
            <p>{props.runobject.lvlReq}</p>
            <p>{props.runobject.wpnEffect}</p>
            <p>{props.runobject.armEffect}</p>
            <p>{props.runobject.chosen}</p>
            <img src={props.runobject.imgUrl} alt=""/>
        </div>
    )
}

export default Rune