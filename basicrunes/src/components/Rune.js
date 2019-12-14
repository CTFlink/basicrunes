import React from 'react'
import data from '../data'


function myfunction(){
    document.getElementById('hej').style.border= 'solid'
    document.getElementById('hej').style.borderColor= 'darkblue'
}

function showEffects(){
    document.getElementById('hej').style.border= 'solid'
    document.getElementById('hej').style.borderColor= 'white'
//denne linje skal ændre css stylen eller sådan noget lignende
}

function Rune (props) {
    
    return(
        <div className="Rune" >
        <img id="hej" src={props.runeobject.imgUrl} alt={props.runeobject.name} onMouseOver={myfunction} onMouseLeave={showEffects} title={props.runeobject.name}/>

            <p>{props.runeobject.name}</p>
            <p>{props.runeobject.lvlReq}</p>
            <p>{props.runeobject.wpnEffect}</p>
            <p>{props.runeobject.armEffect}</p>
            <p>{props.runeobject.chosen}</p>
        </div>
    )
}

export default Rune
