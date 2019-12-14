import React from 'react'

function myfunction(){
    alert("Knappen er trykket")
}

function showEffects(){
    alert("Hej")
}

function Rune (props) {
    
    return(
        <div classname="Rune">
        <button><img src={props.runobject.imgUrl} onmouseover={showEffects()} alt={props.runobject.name} onClick={myfunction} title={props.runobject.name}/></button>


            <p>{props.runobject.name}</p>
            <p>{props.runobject.lvlReq}</p>
            <p>{props.runobject.wpnEffect}</p>
            <p>{props.runobject.armEffect}</p>
            <p>{props.runobject.chosen}</p>
        </div>
    )
}

export default Rune