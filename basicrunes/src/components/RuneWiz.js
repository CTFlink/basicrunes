import React from 'react';
import Rune from './Rune';

function RuneWiz() {
  return (
    <div className="RuneWiz">
      <header className="RuneWiz-header">
      <h1>RuneWiz</h1>
      </header>

        <div className="RuneSelection">
          <header className="RuneSelection-header">
          <h4>RuneSelection</h4>
          </header>
          <Rune 
          name="El"
          lvlReq="11" 
          wpnEffect="Weaponeffect"
          armEffect="Armoureffect"
          chosen="true" 
          imgUrl="http://classic.battle.net/images/battle/diablo2exp/images/runes/runeEl.gif"
          
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

export default RuneWiz;
