import { useState } from "react";

export const PlacingAiShips = () => {
  const Squars = document.querySelectorAll(".AiSquars");
  Squars.forEach((AiSquar) => {
    if (AiSquar.id == "Ai10") {
      for (let i = 0; i < 5; i++) {
        const AiCarrier = document.getElementById(`Ai${10 + i}`);
        AiCarrier?.classList.add("AiCarrier");
        
        AiCarrier?.classList.remove("empty");
      }
    }

    if (AiSquar.id == "Ai25") {
      for (let i = 0; i < 4; i++) {
        const AiBattleship = document.getElementById(`Ai${25 + i * 10}`);
        AiBattleship?.classList.add("AiBattleship");
       
        AiBattleship?.classList.remove("empty");
      }
    }

    if (AiSquar.id == "Ai90") {
      for (let i = 0; i < 3; i++) {
        const AiCruiser = document.getElementById(`Ai${90 + i}`);
        AiCruiser?.classList.add("AiCruiser");
       
        AiCruiser?.classList.remove("empty");
      }
    }

    if (AiSquar.id == "Ai68") {
      for (let i = 0; i < 3; i++) {
        const AiSubmarine = document.getElementById(`Ai${68 + i * 10}`);
        AiSubmarine?.classList.add("AiSubmarine");
        
        AiSubmarine?.classList.remove("empty");
      }
    }
    if (AiSquar.id == "Ai0") {
      for (let i = 0; i < 2; i++) {
        const AiDestroyer = document.getElementById(`Ai${0 + i}`);
        AiDestroyer?.classList.add("AiDestroyer");
        
        AiDestroyer?.classList.remove("empty");
      }
    }
  });
};

export const AiBoard = () => {
  const Aiboard = () => {
    const [PlayerTurn, setPlayerTurn] = useState(false);
    const randomSpote = Math.floor(Math.random() * 100);
    const AiSquars = document.querySelectorAll(".AiSquars");
    const randomSquars = document.getElementById(`${randomSpote}`);
    const Information = document.querySelector(".Information");
    const AllAiShips = document.querySelectorAll(".AiShip");
    const handleClick = () => {
      if(AllAiShips.length == 16){
        if (Information) {
        Information.textContent = "You win";
        AiSquars.forEach(AiSquar =>{
          AiSquar.classList.add("GameOver")
        })
      }
      }
     
      if (!PlayerTurn) {
        setPlayerTurn(true);
        if (!randomSquars?.classList.contains("choiced")) {
          randomSquars?.classList.add("choiced");
          if(randomSquars)randomSquars.textContent = "X"
          
        }
        
       
      }
      if (PlayerTurn) {
        setPlayerTurn(false);
        if (!randomSquars?.classList.contains("choiced")) {
          randomSquars?.classList.add("choiced");
          if(randomSquars)randomSquars.textContent = "X"
        }
        AiSquars.forEach((AiSquar) => {
          AiSquar.addEventListener("click", () => {
            AiSquar.classList.add("choiced");
            
            if (
              AiSquar.classList.contains("AiCarrier") ||
              AiSquar.classList.contains("AiBattleship") ||
              AiSquar.classList.contains("AiCruiser") ||
              AiSquar.classList.contains("AiSubmarine") ||
              AiSquar.classList.contains("AiDestroyer")
            ) {
              AiSquar.classList.add("AiShip")
              if (Information) Information.textContent = "You got a hit";
              if( AiSquar)  AiSquar.textContent = "X"
            
            }
           

            else {
              if (Information) Information.textContent = "You Miss";
            }
          });
        });
       
      }
      
    };

    const squars = [];
    for (let i = 0; i < 100; i++) {
      squars.push(
        <span
          className={`empty AiSquars`}
          id={`Ai${i}`}
          key={`Ai${i}`}
          onClick={handleClick}
        ></span>
      );
    }

    return <div className="AiBoard DisplayOff ">{squars}</div>;
  };

  return Aiboard();
};
