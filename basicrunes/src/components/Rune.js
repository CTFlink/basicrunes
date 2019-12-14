import React from 'react'
// import data from '../data'
// import RuneWiz from './RuneWiz'

function myfunction(){
    document.getElementById('hej').style.border= 'solid'
    document.getElementById('hej').style.borderColor= 'darkblue'
}

function showEffects(){
    document.getElementById('hej').style.border= 'solid'
    document.getElementById('hej').style.borderColor= 'grayscale'
}

class Rune extends React.Component{

    render (){
        return(
        <div className="Rune" >
        <img id={'hej'} src={this.props.runeobject.imgUrl} alt={this.props.runeobject.name} onMouseOver={myfunction} onMouseLeave={showEffects} title={this.props.runeobject.name}/>

            <p>{this.props.runeobject.name}</p>
            <p>{this.props.runeobject.lvlReq}</p>
            <p>{this.props.runeobject.wpnEffect}</p>
            <p>{this.props.runeobject.armEffect}</p>
            <p>{this.props.runeobject.chosen}</p>
        </div>
        )

    }
}   
     

export default Rune
