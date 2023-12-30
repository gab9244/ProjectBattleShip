import { Footer } from "./Footer";
import { SetStateAction, useState } from "react";
export const Home = () => {
   
  // PlacingPieces
  const [InputValue, setInputValue] = useState("")
  const Start = () =>{
    const PlacingPieces = document.querySelector(".PlacingPieces")
    const Home = document.querySelector(".Home")

   
    PlacingPieces?.classList.remove("DisplayOff")
    Home?.classList.add("DisplayOff")
    

  }
  
  const commanderName = document.querySelector(".commanderName")
  const handleInput = (event: { target: { value: SetStateAction<string>; }; })=>{
    setInputValue(event.target.value)
    if(commanderName) commanderName.textContent = InputValue
  }





  return (
    <div className="Home">
      <div className="battleshipLogo">
        <img
          src="/ProjectBattleShip/Battleship-logo.png"
          alt="Battleship logo"
        />
      </div>

      <div className="playerLayout">
        <label htmlFor="PlayerName">
          <p>Player Name</p>
          <input
            type="text"
            name="PlayerName"
            id="PlayerName"
            placeholder="Add your commander name"
            onChange={handleInput}
          />
        </label>
        <button onClick={Start}>Start</button>
      </div>
      <Footer />
    </div>
  );
};
