import React from 'react'
import data from '../data'


function myfunction(){
    document.getElementById('hej').style.border= 'solid'
    document.getElementById('hej').style.borderColor= 'lightblue'
}

function showEffects(){
    alert("geh")
//denne linje skal ændre css stylen eller sådan noget lignende
}

function Rune (props) {
    
    return(
        <div className="Rune" >
        <img id="hej" src={props.runobject.imgUrl} alt={props.runobject.name} onClick={myfunction} title={props.runobject.name}/>

            <p>{props.runobject.name}</p>
            <p>{props.runobject.lvlReq}</p>
            <p>{props.runobject.wpnEffect}</p>
            <p>{props.runobject.armEffect}</p>
            <p>{props.runobject.chosen}</p>
        </div>
    )
}

export default Rune
