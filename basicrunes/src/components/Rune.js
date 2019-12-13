import React from 'react'

function Rune (props) {
    
    return(
        <div classname="Rune">
            <p>{props.name}</p>
            <p>{props.lvlReq}</p>
            <p>{props.wpnEffect}</p>
            <p>{props.armEffect}</p>
            <p>{props.chosen}</p>
            <img src={props.imgUrl}/>
        </div>
    )
}

export default Rune