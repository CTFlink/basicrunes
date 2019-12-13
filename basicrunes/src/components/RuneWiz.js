import React from 'react';
import Rune from './Rune';

class RuneWiz extends React.Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  render() {


// function RuneWiz() {
  return (
    <div className="RuneWiz">
      <header className="RuneWiz-header">
      <h1>RuneWiz</h1>
      </header>

        <div className="RuneSelection">
          <header className="RuneSelection-header">
          <h4>RuneSelection</h4>
          </header>
          <p className="App-intro">{this.state.data}</p>
          
           <Rune runobject = {{name:"El", lvlReq: "11", wpnEffect:"WpnEffect", armEffect:"ArmourEffect", chosen:"true", imgUrl:"http://classic.battle.net/images/battle/diablo2exp/images/runes/runeEl.gif" }}
          
          // name="El"
          // lvlReq="11" 
          // wpnEffect="Weaponeffect"
          // armEffect="Armoureffect"
          // chosen="true" 
          // imgUrl="http://classic.battle.net/images/battle/diablo2exp/images/runes/runeEl.gif"
          
          /> 
        </div>

        {/* <div className="RuneWords">
        <header className="RuneWords-header">
        <h4>RuneWords</h4>
        </header>
        </div> */}
    </div>
  );
  }
}
//}

export default RuneWiz;