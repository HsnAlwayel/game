import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { GlobalStyle } from "./styles";
import Heroes from "./components/Heroes"
import Villain from "./components/Villain"

function App() {
  //Currency
  const [gold, setGold] = useState(0)
  function switchCaseGold() {
    switch (count) {
      case 16: setGold(gold + 20); alert("You Earned 20 Gold,Buy some upgrades"); break;
      case 28: setGold(gold + 20); alert("You Earned 20 Gold,Buy some upgrades"); break;
      case 60: setGold(gold + 20); alert("You Earned 20 Gold,Buy some upgrades"); break;
      case 80: setGold(gold + 20); alert("You Earned 20 Gold,Buy some upgrades"); break;
    }
  }
  //Attack Count
  const [count, setCounter] = useState(0)
  function attackCounter() { setCounter(count + 1) }
  //critical
  const [critical, setCritical] = useState(0)
  function incCritical() {
    if (critical === 0 && gold >= 6) {
      setGold(gold - 6);
      setCritical(1);
    }
  }
  //Double Damage
  const [incValue, setIncValue] = useState(1)
  function incDouble() {
    if (gold >= 2) {
      setGold(gold - 2)
      setIncValue(incValue * 2)
    }
  }
  //Persecond Healing/Damage
  const [perSecond, setPerSecond] = useState(100)
  function lowerHealing() {
    if (gold >= 2) {
      setGold(gold - 2)
      setPerSecond(perSecond - 50);
    }
  }

  //Starting healing and attacking
  const [health, setHealth] = useState(5000)
  function attack() {
    if (health <= 0) { alert("You WON!,Dance on the Villains corpse and scream TARARARA!!") }
    else if (critical === 1 && count % 5 === 0) {
      setHealth(health - (incValue * 3));
      attackCounter();
      alert(`critical hit for ${incValue * 3}`);
    }
    else {
      setHealth(health - incValue);
      attackCounter();
      switchCaseGold()
    }
  }
  //Activate Healing perSecond
  // useEffect(() => {
  //   setInterval(setHealth(perSecond + health, 1000))
  // // });
  useEffect(() => {
    const intervalID = setInterval(() => {
      setHealth(health + perSecond);
    }, 3000);
    return () => {
      clearInterval(intervalID);
    };
  }, [health]);
  //Hero Choice


  const theme = {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#000000", // main background color
    color: "#ff85a2",
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1 >Click Hero</h1>
      <h5>{"Damage = " + incValue + ",  Gold=" + gold + ", Count=" + count}</h5>
      <button onClick={attack}>Attack</button>
      <div class="row">
        <div class="column">
          <Heroes />
        </div>
        <div class="column">
          {/* <Villain /> */}
          <img src="https://i.pinimg.com/originals/91/89/ae/9189aeca9836550216d986dd0cbab062.jpg" alt="Enemy" />
          <p>{health + "/5000(HeathPoints)"}</p>
        </div>
      </div>
      <h4>Upgrades Shop</h4>
      <button onClick={incDouble}>Double Damage 2G</button>
      <button onClick={incCritical}>Critical Damage 6G</button>
      <button onClick={lowerHealing}>Lower Healing per Second 2G</button>
    </ThemeProvider>
  );
}

export default App;
