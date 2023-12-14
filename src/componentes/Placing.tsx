export const Placing = () => {
  const shipsFactory = (name: string, length: number) => {
    return {
      length: length,
      name: name,
    };
  };

  const carrier = shipsFactory("Carrier", 5);
  const battleship = shipsFactory("Battleship", 4);
  const cruiser = shipsFactory("Cruiser", 3);
  const submarine = shipsFactory("Submarine", 3);
  const destroyer = shipsFactory("Destroyer", 2);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ships = [carrier, battleship, cruiser, submarine, destroyer];

  const Squars = () => {
    const squars = [];
    for (let i = 0; i < 100; i++) {
      squars.push(
        <span
          className={`squars empty`}
          id={`${i}`}
          key={`${i}`}
          onMouseOver={SpacingShips}
        ></span>
      );
    }

    return <div className="board">{squars}</div>;
  };
  const selectedShip = ()=>{
    const carrier = document.querySelector(".carrier")
    const battleship = document.querySelector(".battleship")
    const cruiser = document.querySelector(".cruiser")
    const submarine = document.querySelector(".submarine")
    const destroyer = document.querySelector(".destroyer")

    const Ships = document.querySelectorAll(".Ships")
    Ships.forEach((ship) =>{
      ship.addEventListener("click", ()=>{
        if(ship.classList.contains("carrier")){
          carrier?.classList.add("actived")
          battleship?.classList.remove("actived")
          cruiser?.classList.remove("actived")
          submarine?.classList.remove("actived")
          destroyer?.classList.remove("actived")
          
         
        }
        if(ship.classList.contains("battleship")){
          carrier?.classList.remove("actived")
          battleship?.classList.add("actived")
          cruiser?.classList.remove("actived")
          submarine?.classList.remove("actived")
          destroyer?.classList.remove("actived")
        }
        if(ship.classList.contains("cruiser")){
          carrier?.classList.remove("actived")
          battleship?.classList.remove("actived")
          cruiser?.classList.add("actived")
          submarine?.classList.remove("actived")
          destroyer?.classList.remove("actived")
        }
        if(ship.classList.contains("submarine")){
          carrier?.classList.remove("actived")
          battleship?.classList.remove("actived")
          cruiser?.classList.remove("actived")
          submarine?.classList.add("actived")
          destroyer?.classList.remove("actived")
        }
        if(ship.classList.contains("destroyer")){
          carrier?.classList.remove("actived")
          battleship?.classList.remove("actived")
          cruiser?.classList.remove("actived")
          submarine?.classList.remove("actived")
          destroyer?.classList.add("actived")
        }
        
      })
     
    
    })
  }


  const SpacingShips = () => {
    const squars = document.querySelectorAll(" .squars");
    const Ships = document.querySelectorAll(".Ships");
    squars.forEach((squar) => {
      Ships.forEach((ship) => {

        //O evento mouseover faz algo quanto o mouse passa sobre o elemento
        squar.addEventListener("mouseover", () => {
          const idValue = Number(squar.id)
         

          if (ship?.classList.contains("actived") && ship?.classList.contains("carrier")) {
            for(let i = 0 ; i < carrier.length; i++){
              const elements = document.getElementById(`${idValue +i }`) 
             
              elements?.classList.add("carrierPlace")
              elements?.classList.remove("empty")
            }
            
          }
          
          if (ship?.classList.contains("actived") && ship?.classList.contains("battleship")) {
            for(let i = 0 ; i < battleship.length; i++){
              const elements = document.getElementById(`${idValue + i }`)
              if( elements?.classList.contains("carrierPlace")) return
              elements?.classList.add("battlershipPlace")
              elements?.classList.remove("empty")
            }
          }

          if (ship?.classList.contains("actived") && ship?.classList.contains("cruiser")) {
            for(let i = 0 ; i < cruiser.length; i++){
              const elements = document.getElementById(`${idValue + i }`)
              elements?.classList.add("cruiserPlace")
              elements?.classList.remove("empty")
            }
          }

          if (ship?.classList.contains("actived") && ship?.classList.contains("submarine")) {
            for(let i = 0 ; i < submarine.length; i++){
              const elements = document.getElementById(`${idValue + i }`)
              elements?.classList.add("submarinePlace")
              elements?.classList.remove("empty")
            }
          }

          if (ship?.classList.contains("actived") && ship?.classList.contains("destroyer")) {
            for(let i = 0 ; i < destroyer.length; i++){
              const elements = document.getElementById(`${idValue + i }`)
              elements?.classList.add("destroyerPlace")
              elements?.classList.remove("empty")
            }
          }
         
        });

        //O evento mouseover faz algo quanto o mouse sai do elemento
        squar.addEventListener("mouseout", () => {
          const idValue = Number(squar.id)

          if (ship?.classList.contains("actived") && ship?.classList.contains("carrier") && !squar.classList.contains("empty")) {
            for(let i = 0 ; i < carrier.length; i++){
              if (ship?.classList.contains("actived") && ship?.classList.contains("carrier")) {
              const elements = document.getElementById(`${idValue +i}`)
              
              elements?.classList.remove("carrierPlace")
              elements?.classList.add("empty")
             
              }
            }
            
          }
        
          if (ship?.classList.contains("actived") && ship?.classList.contains("battleship")) {
             for(let i = 0 ; i < battleship.length; i++){
              if (ship?.classList.contains("actived") && ship?.classList.contains("battleship")) {
              const elements = document.getElementById(`${idValue +i}`)
              elements?.classList.remove("battlershipPlace")
              elements?.classList.add("empty")

              }
            }
          }

          if (ship?.classList.contains("actived") && ship?.classList.contains("cruiser")) {
            for(let i = 0 ; i < cruiser.length; i++){
              if (ship?.classList.contains("actived") && ship?.classList.contains("cruiser")) {
              const elements = document.getElementById(`${idValue +i}`)
              elements?.classList.remove("cruiserPlace")
             elements?.classList.add("empty")
              }
            }
          }
          if (ship?.classList.contains("actived") && ship?.classList.contains("submarine")) {
            for(let i = 0 ; i < submarine.length; i++){
              if (ship?.classList.contains("actived") && ship?.classList.contains("submarine")) {
              const elements = document.getElementById(`${idValue +i}`)
              elements?.classList.remove("submarinePlace")
              elements?.classList.add("empty")
              }
            }          
          }

          if (ship?.classList.contains("actived") && ship?.classList.contains("destroyer")) {
            for(let i = 0 ; i < destroyer.length; i++){
              if (ship?.classList.contains("actived") && ship?.classList.contains("destroyer")) {
              const elements = document.getElementById(`${idValue +i}`)
              elements?.classList.remove("destroyerPlace")
             elements?.classList.add("empty")
              }
            }          
          }
      
        });

        squar.addEventListener("click", ()=>{
          const idValue = Number(squar.id)
          const validedOne = idValue + 1
          const oneSquar = document.getElementById(`${validedOne}`)
          
          if (ship?.classList.contains("carrier")  && squar.classList.contains("carrierPlace")) {
            for(let i = 0 ; i < carrier.length; i++){
              const elements = document.getElementById(`${idValue +i }`)
             
              elements?.classList.add("carrierPlace")
              elements?.classList.remove("empty")
              ship.classList.remove("actived")
              ship.classList.remove("carrier")
            }
          }

          if (ship?.classList.contains("battleship") && squar.classList.contains("battlershipPlace")) {
            for(let i = 0 ; i < battleship.length; i++){
              const elements = document.getElementById(`${idValue + i}`)
              if(!elements?.classList.contains("carrierPlace") && !oneSquar?.classList.contains("carrierPlace")){
              elements?.classList.add("battlershipPlace")
              elements?.classList.remove("empty")
              ship.classList.remove("actived")
              ship.classList.remove("battleship")
              }
            }
          }

          if (ship?.classList.contains("cruiser") && squar.classList.contains("cruiserPlace")) {
            for(let i = 0 ; i < cruiser.length; i++){
              const elements = document.getElementById(`${idValue +i }`)
              elements?.classList.add("cruiserPlace")
              elements?.classList.remove("empty")
              ship.classList.remove("actived")
              ship.classList.remove("cruiser")
            }
          }

          if (ship?.classList.contains("submarine") && squar.classList.contains("submarinePlace")) {
            for(let i = 0 ; i < submarine.length; i++){
              const elements = document.getElementById(`${idValue +i }`)
              elements?.classList.add("submarinePlace")
              elements?.classList.remove("empty")
              ship.classList.remove("actived")
              ship.classList.remove("submarine")
            }
          }

          if (ship?.classList.contains("destroyer") && squar.classList.contains("destroyerPlace")) {
            for(let i = 0 ; i < destroyer.length; i++){
              const elements = document.getElementById(`${idValue + i}`)
              elements?.classList.add("destroyerPlace")
              elements?.classList.remove("empty")
              ship.classList.remove("actived")
              ship.classList.remove("destroyer")
            }
          }
        })

      });
        
      
    });

   
  

  };

  return (
    <div className="PlacingPieces">
      <h1>
        <span className="commanderName">323223</span> Place your
      </h1>
      <Squars />

      <div className="Shipsharbor">
        <div className="carrier Ships " id="Carrier"  onClick={selectedShip}></div>
        <div className="battleship Ships" id="Battleship" onClick={selectedShip}></div>
        <div className="cruiser Ships" id="Cruiser" onClick={selectedShip}></div>
        <div className="submarine Ships" id="Submarine" onClick={selectedShip}></div>
        <div className="destroyer Ships" id="Destroyer" onClick={selectedShip}></div>
      </div>
    </div>
  );
};
