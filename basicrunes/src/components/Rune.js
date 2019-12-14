import React from 'react'
// import data from '../data'
// import RuneWiz from './RuneWiz'

// function myfunction(){
//     document.getElementById('hej').style.border= 'solid'
//     document.getElementById('hej').style.borderColor= 'darkblue'
// }
//  onMouseOver={myfunction} onMouseLeave={showEffects} 

function showAlert(){
    alert('herj')
    }

class Rune extends React.Component{

    render (){
        return(
        <div className="Rune" >
        <img id={'Rune'} src={this.props.runeobject.imgUrl} alt={this.props.runeobject.name} title={this.props.runeobject.name} onClick={showAlert}/>

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
