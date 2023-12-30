import { AiBoard } from "./AiBoard";
import { PlacingAiShips } from "./AiBoard";
import { useState } from "react";

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

  const SelectedShip = () => {
    const carrier = document.querySelector("#Carrier");
    const battleship = document.querySelector("#Battleship");
    const cruiser = document.querySelector("#Cruiser");
    const submarine = document.querySelector("#Submarine");
    const destroyer = document.querySelector("#Destroyer");
    const StartButton = document.querySelector(".StartButton");

    const ShipClicked = document.querySelector(".ShipClicked");

    const Ships = document.querySelectorAll(".Ships");
    Ships.forEach((ship) => {
      ship.addEventListener("click", () => {
        if (ship.classList.contains("carrier")) {
          carrier?.classList.add("actived");
          battleship?.classList.remove("actived");
          cruiser?.classList.remove("actived");
          submarine?.classList.remove("actived");
          destroyer?.classList.remove("actived");
          carrier?.classList.add("placed");
          if (ShipClicked) ShipClicked.textContent = "Carrier";
        }
        if (ship.classList.contains("battleship")) {
          carrier?.classList.remove("actived");
          battleship?.classList.add("actived");
          cruiser?.classList.remove("actived");
          submarine?.classList.remove("actived");
          destroyer?.classList.remove("actived");
          battleship?.classList.add("placed");
          if (ShipClicked) ShipClicked.textContent = "Battleship";
        }
        if (ship.classList.contains("cruiser")) {
          carrier?.classList.remove("actived");
          battleship?.classList.remove("actived");
          cruiser?.classList.add("actived");
          submarine?.classList.remove("actived");
          destroyer?.classList.remove("actived");
          cruiser?.classList.add("placed");
          if (ShipClicked) ShipClicked.textContent = "Cruiser";
        }
        if (ship.classList.contains("submarine")) {
          carrier?.classList.remove("actived");
          battleship?.classList.remove("actived");
          cruiser?.classList.remove("actived");
          submarine?.classList.add("actived");
          destroyer?.classList.remove("actived");
          submarine?.classList.add("placed");
          if (ShipClicked) ShipClicked.textContent = "Submarine";
        }
        if (ship.classList.contains("destroyer")) {
          carrier?.classList.remove("actived");
          battleship?.classList.remove("actived");
          cruiser?.classList.remove("actived");
          submarine?.classList.remove("actived");
          destroyer?.classList.add("actived");
          destroyer?.classList.add("placed");
          if (ShipClicked) ShipClicked.textContent = "Destroyer";
        }

        if (
          carrier?.classList.contains("placed") &&
          battleship?.classList.contains("placed") &&
          cruiser?.classList.contains("placed") &&
          submarine?.classList.contains("placed") &&
          destroyer?.classList.contains("placed")
        ) {
          
          StartButton?.classList.remove("DisplayOff");
        }
      });
    });
  };

  const invalidSquarTwo = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  const lastSquar = [96, 97, 98, 99];
  const battleshipLastSquar = [97, 98, 99];
  const CSLastSquar = [98, 99];

  const virticalLastSquar = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

  const SpacingShips = () => {
    const squars = document.querySelectorAll(" .squars");
    const Ships = document.querySelectorAll(".Ships");
    squars.forEach((squar) => {
      Ships.forEach((ship) => {
        //O evento mouseover faz algo quanto o mouse passa sobre o elemento
        squar.addEventListener("mouseover", () => {
          const idValue = Number(squar.id);
          const Shipsharbor = document.querySelector(".Shipsharbor");

          if (
            ship?.classList.contains("actived") &&
            ship?.classList.contains("carrier") &&
            Shipsharbor?.classList.contains("NaVertical") &&
            ship.classList.contains("vertical")
          ) {
            for (let i = 0; i < carrier.length; i++) {
              const elements = document.getElementById(`${idValue + i * 10}`);
              const oneSquar = document.getElementById(`${idValue}`);
              for (let i = 0; i < virticalLastSquar.length; i++) {
                const newSquar = i;
                if (
                  elements?.classList.contains("battlershipPlace") ||
                  elements?.classList.contains("cruiserPlace") ||
                  elements?.classList.contains("submarinePlace") ||
                  elements?.classList.contains("destroyerPlace") ||
                  Number(oneSquar?.id) == virticalLastSquar[newSquar] ||
                  Number(oneSquar?.id) == virticalLastSquar[newSquar] - 10 ||
                  Number(oneSquar?.id) == virticalLastSquar[newSquar] - 20 ||
                  Number(oneSquar?.id) == virticalLastSquar[newSquar] - 30
                )
                  return;
              }
              elements?.classList.add("carrierPlace");
              elements?.classList.remove("empty");
            }
          } else {
            if (
              ship?.classList.contains("actived") &&
              ship?.classList.contains("carrier")
            ) {
              for (let i = 0; i < carrier.length; i++) {
                const elements = document.getElementById(`${idValue + i}`);
                // oneSquar representa o quadrado clicado e os quadrados equivalentes oa tamanho do navio
                const oneSquar = document.getElementById(
                  `${idValue + carrier.length - 1}`
                );
                for (let i = 0; i < invalidSquarTwo.length; i++) {
                  const newSquar = i;
                  if (
                    elements?.classList.contains("battlershipPlace") ||
                    elements?.classList.contains("cruiserPlace") ||
                    elements?.classList.contains("submarinePlace") ||
                    elements?.classList.contains("destroyerPlace") ||
                    Number(oneSquar?.id) == invalidSquarTwo[newSquar] ||
                    Number(oneSquar?.id) == invalidSquarTwo[newSquar] + 1 ||
                    Number(oneSquar?.id) == invalidSquarTwo[newSquar] + 2 ||
                    Number(oneSquar?.id) == invalidSquarTwo[newSquar] + 3 ||
                    Number(squar.id) == lastSquar[newSquar]
                  )
                    return;
                }
                elements?.classList.add("carrierPlace");
                elements?.classList.remove("empty");
              }
            }
          }

          if (
            ship?.classList.contains("actived") &&
            ship?.classList.contains("battleship") &&
            Shipsharbor?.classList.contains("NaVertical") &&
            ship.classList.contains("vertical")
          ) {
            for (let i = 0; i < battleship.length; i++) {
              const elements = document.getElementById(`${idValue + i * 10}`);
              const oneSquar = document.getElementById(`${idValue}`);
              for (let i = 0; i < virticalLastSquar.length; i++) {
                const newSquar = i;
                if (
                  elements?.classList.contains("carrierPlace") ||
                  elements?.classList.contains("cruiserPlace") ||
                  elements?.classList.contains("submarinePlace") ||
                  elements?.classList.contains("destroyerPlace") ||
                  Number(oneSquar?.id) == virticalLastSquar[newSquar] ||
                  Number(oneSquar?.id) == virticalLastSquar[newSquar] - 10 ||
                  Number(oneSquar?.id) == virticalLastSquar[newSquar] - 20
                )
                  return;
              }
              elements?.classList.add("battlershipPlace");
              elements?.classList.remove("empty");
            }
          } else {
            if (
              ship?.classList.contains("actived") &&
              ship?.classList.contains("battleship")
            ) {
              for (let i = 0; i < battleship.length; i++) {
                const elements = document.getElementById(`${idValue + i}`);
                const oneSquar = document.getElementById(
                  `${idValue + battleship.length - 1}`
                );
                for (let i = 0; i < invalidSquarTwo.length; i++) {
                  const newSquar = i;
                  if (
                    elements?.classList.contains("carrierPlace") ||
                    elements?.classList.contains("cruiserPlace") ||
                    elements?.classList.contains("submarinePlace") ||
                    elements?.classList.contains("destroyerPlace") ||
                    Number(oneSquar?.id) == invalidSquarTwo[newSquar] ||
                    Number(oneSquar?.id) == invalidSquarTwo[newSquar] + 1 ||
                    Number(oneSquar?.id) == invalidSquarTwo[newSquar] + 2 ||
                    Number(squar.id) == battleshipLastSquar[newSquar]
                  )
                    return;
                }
                elements?.classList.add("battlershipPlace");
                elements?.classList.remove("empty");
              }
            }
          }

          if (
            ship?.classList.contains("actived") &&
            ship?.classList.contains("cruiser") &&
            Shipsharbor?.classList.contains("NaVertical") &&
            ship.classList.contains("vertical")
          ) {
            for (let i = 0; i < cruiser.length; i++) {
              const elements = document.getElementById(`${idValue + i * 10}`);
              const oneSquar = document.getElementById(`${idValue}`);
              for (let i = 0; i < virticalLastSquar.length; i++) {
                const newSquar = i;
                if (
                  elements?.classList.contains("carrierPlace") ||
                  elements?.classList.contains("battlershipPlace") ||
                  elements?.classList.contains("submarinePlace") ||
                  elements?.classList.contains("destroyerPlace") ||
                  Number(oneSquar?.id) == virticalLastSquar[newSquar] ||
                  Number(oneSquar?.id) == virticalLastSquar[newSquar] - 10
                )
                  return;
              }
              elements?.classList.add("cruiserPlace");
              elements?.classList.remove("empty");
            }
          } else {
            if (
              ship?.classList.contains("actived") &&
              ship?.classList.contains("cruiser")
            ) {
              for (let i = 0; i < cruiser.length; i++) {
                const elements = document.getElementById(`${idValue + i}`);
                const oneSquar = document.getElementById(
                  `${idValue + cruiser.length - 1}`
                );
                for (let i = 0; i < invalidSquarTwo.length; i++) {
                  const newSquar = i;
                  if (
                    elements?.classList.contains("carrierPlace") ||
                    elements?.classList.contains("battlershipPlace") ||
                    elements?.classList.contains("submarinePlace") ||
                    elements?.classList.contains("destroyerPlace") ||
                    Number(oneSquar?.id) == invalidSquarTwo[newSquar] ||
                    Number(oneSquar?.id) == invalidSquarTwo[newSquar] + 1 ||
                    Number(squar.id) == CSLastSquar[newSquar]
                  )
                    return;
                }
                elements?.classList.add("cruiserPlace");
                elements?.classList.remove("empty");
              }
            }
          }

          if (
            ship?.classList.contains("actived") &&
            ship?.classList.contains("submarine") &&
            Shipsharbor?.classList.contains("NaVertical") &&
            ship.classList.contains("vertical")
          ) {
            for (let i = 0; i < submarine.length; i++) {
              const elements = document.getElementById(`${idValue + i * 10}`);
              const oneSquar = document.getElementById(`${idValue}`);
              for (let i = 0; i < virticalLastSquar.length; i++) {
                const newSquar = i;
                if (
                  elements?.classList.contains("carrierPlace") ||
                  elements?.classList.contains("battlershipPlace") ||
                  elements?.classList.contains("cruiserPlace") ||
                  elements?.classList.contains("destroyerPlace") ||
                  Number(oneSquar?.id) == virticalLastSquar[newSquar] ||
                  Number(oneSquar?.id) == virticalLastSquar[newSquar] - 10
                )
                  return;
              }
              elements?.classList.add("submarinePlace");
              elements?.classList.remove("empty");
            }
          } else {
            if (
              ship?.classList.contains("actived") &&
              ship?.classList.contains("submarine")
            ) {
              for (let i = 0; i < submarine.length; i++) {
                const elements = document.getElementById(`${idValue + i}`);
                const oneSquar = document.getElementById(
                  `${idValue + submarine.length - 1}`
                );
                for (let i = 0; i < invalidSquarTwo.length; i++) {
                  const newSquar = i;
                  if (
                    elements?.classList.contains("carrierPlace") ||
                    elements?.classList.contains("battlershipPlace") ||
                    elements?.classList.contains("cruiserPlace") ||
                    elements?.classList.contains("destroyerPlace") ||
                    Number(oneSquar?.id) == invalidSquarTwo[newSquar] ||
                    Number(oneSquar?.id) == invalidSquarTwo[newSquar] + 1 ||
                    Number(squar.id) == CSLastSquar[newSquar]
                  )
                    return;
                }
                elements?.classList.add("submarinePlace");
                elements?.classList.remove("empty");
              }
            }
          }

          if (
            ship?.classList.contains("actived") &&
            ship?.classList.contains("destroyer") &&
            Shipsharbor?.classList.contains("NaVertical") &&
            ship.classList.contains("vertical")
          ) {
            for (let i = 0; i < destroyer.length; i++) {
              const elements = document.getElementById(`${idValue + i * 10}`);
              const oneSquar = document.getElementById(`${idValue}`);
              for (let i = 0; i < virticalLastSquar.length; i++) {
                const newSquar = i;
                if (
                  elements?.classList.contains("carrierPlace") ||
                  elements?.classList.contains("battlershipPlace") ||
                  elements?.classList.contains("cruiserPlace") ||
                  elements?.classList.contains("submarinePlace") ||
                  Number(oneSquar?.id) == virticalLastSquar[newSquar]
                )
                  return;
              }
              elements?.classList.add("destroyerPlace");
              elements?.classList.remove("empty");
            }
          } else {
            if (
              ship?.classList.contains("actived") &&
              ship?.classList.contains("destroyer")
            ) {
              for (let i = 0; i < destroyer.length; i++) {
                const elements = document.getElementById(`${idValue + i}`);
                const oneSquar = document.getElementById(
                  `${idValue + destroyer.length - 1}`
                );
                for (let i = 0; i < invalidSquarTwo.length; i++) {
                  const newSquar = i;
                  if (
                    elements?.classList.contains("carrierPlace") ||
                    elements?.classList.contains("battlershipPlace") ||
                    elements?.classList.contains("submarinePlace") ||
                    elements?.classList.contains("cruiserPlace") ||
                    Number(oneSquar?.id) == invalidSquarTwo[newSquar] ||
                    Number(squar.id) == 99
                  )
                    return;
                }
                elements?.classList.add("destroyerPlace");
                elements?.classList.remove("empty");
              }
            }
          }
        });

        //O evento mouseover faz algo quanto o mouse sai do elemento
        squar.addEventListener("mouseout", () => {
          const idValue = Number(squar.id);
          const Shipsharbor = document.querySelector(".Shipsharbor");
          if (
            ship?.classList.contains("actived") &&
            ship?.classList.contains("carrier") &&
            Shipsharbor?.classList.contains("NaVertical") &&
            ship.classList.contains("vertical")
          ) {
            for (let i = 0; i < carrier.length; i++) {
              const elements = document.getElementById(`${idValue + i * 10}`);
              elements?.classList.remove("carrierPlace");
              elements?.classList.add("empty");
            }
          } else {
            if (
              ship?.classList.contains("actived") &&
              ship?.classList.contains("carrier") &&
              !squar.classList.contains("empty")
            ) {
              for (let i = 0; i < carrier.length; i++) {
                if (
                  ship?.classList.contains("actived") &&
                  ship?.classList.contains("carrier")
                ) {
                  const elements = document.getElementById(`${idValue + i}`);
                  elements?.classList.remove("carrierPlace");
                  elements?.classList.add("empty");
                }
              }
            }
          }

          if (
            ship?.classList.contains("actived") &&
            ship?.classList.contains("battleship") &&
            Shipsharbor?.classList.contains("NaVertical") &&
            ship.classList.contains("vertical")
          ) {
            for (let i = 0; i < battleship.length; i++) {
              const elements = document.getElementById(`${idValue + i * 10}`);
              elements?.classList.remove("battlershipPlace");
              elements?.classList.add("empty");
            }
          } else {
            if (
              ship?.classList.contains("actived") &&
              ship?.classList.contains("battleship")
            ) {
              for (let i = 0; i < battleship.length; i++) {
                if (
                  ship?.classList.contains("actived") &&
                  ship?.classList.contains("battleship")
                ) {
                  const elements = document.getElementById(`${idValue + i}`);
                  elements?.classList.remove("battlershipPlace");
                  elements?.classList.add("empty");
                }
              }
            }
          }
          if (
            ship?.classList.contains("actived") &&
            ship?.classList.contains("cruiser") &&
            Shipsharbor?.classList.contains("NaVertical") &&
            ship.classList.contains("vertical")
          ) {
            for (let i = 0; i < cruiser.length; i++) {
              const elements = document.getElementById(`${idValue + i * 10}`);
              elements?.classList.remove("cruiserPlace");
              elements?.classList.add("empty");
            }
          } else {
            if (
              ship?.classList.contains("actived") &&
              ship?.classList.contains("cruiser")
            ) {
              for (let i = 0; i < cruiser.length; i++) {
                if (
                  ship?.classList.contains("actived") &&
                  ship?.classList.contains("cruiser")
                ) {
                  const elements = document.getElementById(`${idValue + i}`);
                  elements?.classList.remove("cruiserPlace");
                  elements?.classList.add("empty");
                }
              }
            }
          }

          if (
            ship?.classList.contains("actived") &&
            ship?.classList.contains("submarine") &&
            Shipsharbor?.classList.contains("NaVertical") &&
            ship.classList.contains("vertical")
          ) {
            for (let i = 0; i < submarine.length; i++) {
              const elements = document.getElementById(`${idValue + i * 10}`);
              elements?.classList.remove("submarinePlace");
              elements?.classList.add("empty");
            }
          } else {
            if (
              ship?.classList.contains("actived") &&
              ship?.classList.contains("submarine")
            ) {
              for (let i = 0; i < submarine.length; i++) {
                if (
                  ship?.classList.contains("actived") &&
                  ship?.classList.contains("submarine")
                ) {
                  const elements = document.getElementById(`${idValue + i}`);
                  elements?.classList.remove("submarinePlace");
                  elements?.classList.add("empty");
                }
              }
            }
          }

          if (
            ship?.classList.contains("actived") &&
            ship?.classList.contains("destroyer") &&
            Shipsharbor?.classList.contains("NaVertical") &&
            ship.classList.contains("vertical")
          ) {
            for (let i = 0; i < destroyer.length; i++) {
              const elements = document.getElementById(`${idValue + i * 10}`);
              elements?.classList.remove("destroyerPlace");
              elements?.classList.add("empty");
            }
          } else {
            if (
              ship?.classList.contains("actived") &&
              ship?.classList.contains("destroyer")
            ) {
              for (let i = 0; i < destroyer.length; i++) {
                if (
                  ship?.classList.contains("actived") &&
                  ship?.classList.contains("destroyer")
                ) {
                  const elements = document.getElementById(`${idValue + i}`);
                  elements?.classList.remove("destroyerPlace");
                  elements?.classList.add("empty");
                }
              }
            }
          }
        });

        squar.addEventListener("click", () => {
          const idValue = Number(squar.id);
          const Shipsharbor = document.querySelector(".Shipsharbor");

          //Essa função remove a div onde os barcos ficava e adiciona o botão para começar o jogo

          if (
            ship?.classList.contains("carrier") &&
            squar.classList.contains("carrierPlace") &&
            Shipsharbor?.classList.contains("NaVertical") &&
            ship.classList.contains("vertical")
          ) {
            for (let i = 0; i < carrier.length; i++) {
              const elements = document.getElementById(`${idValue + i * 10}`);
              //O oneSquar na vertical é igual ao primeiro quadrado clicado e os proximos quadrados de 10 em 10 até chegar no tamanho do barco
              const oneSquar = document.getElementById(`${idValue + 40}`);
              const overLapProblem = document.getElementById(`${idValue + 30}`);
              const carrierProblem = document.getElementById(`${idValue + 20}`);

              if (
                !oneSquar?.classList.contains("battlershipPlace") &&
                !oneSquar?.classList.contains("cruiserPlace") &&
                !oneSquar?.classList.contains("submarinePlace") &&
                !oneSquar?.classList.contains("destroyerPlace") &&
                !overLapProblem?.classList.contains("battlershipPlace") &&
                !overLapProblem?.classList.contains("cruiserPlace") &&
                !overLapProblem?.classList.contains("submarinePlace") &&
                !overLapProblem?.classList.contains("destroyerPlace") &&
                !overLapProblem?.classList.contains("empty") &&
                !carrierProblem?.classList.contains("empty")
              ) {
                elements?.classList.add("carrierPlace");
                elements?.classList.remove("empty");
                ship.classList.remove("actived");
                ship.classList.remove("carrier");
              }
            }
          } else {
            if (
              ship?.classList.contains("carrier") &&
              squar.classList.contains("carrierPlace")
            ) {
              for (let i = 0; i < carrier.length; i++) {
                const elements = document.getElementById(`${idValue + i}`);
                const oneSquar = document.getElementById(
                  `${idValue + carrier.length - 1}`
                );
                const overLapProblem = document.getElementById(
                  `${idValue + carrier.length - 3}`
                );

                if (
                  !oneSquar?.classList.contains("battlershipPlace") &&
                  !oneSquar?.classList.contains("cruiserPlace") &&
                  !oneSquar?.classList.contains("submarinePlace") &&
                  !oneSquar?.classList.contains("destroyerPlace") &&
                  !overLapProblem?.classList.contains("cruiserPlace") &&
                  !overLapProblem?.classList.contains("submarinePlace") &&
                  !overLapProblem?.classList.contains("destroyerPlace") &&
                  !oneSquar?.classList.contains("empty")
                ) {
                  elements?.classList.add("carrierPlace");
                  elements?.classList.remove("empty");
                  ship.classList.remove("actived");
                  ship.classList.remove("carrier");
                }
              }
            }
          }

          if (
            ship?.classList.contains("battleship") &&
            squar.classList.contains("battlershipPlace") &&
            Shipsharbor?.classList.contains("NaVertical") &&
            ship.classList.contains("vertical")
          ) {
            for (let i = 0; i < battleship.length; i++) {
              const elements = document.getElementById(`${idValue + i * 10}`);
              const oneSquar = document.getElementById(`${idValue + 30}`);
              const overLapProblem = document.getElementById(`${idValue + 20}`);
              const battleshipProblem = document.getElementById(
                `${idValue + 10}`
              );
              if (
                !oneSquar?.classList.contains("carrierPlace") &&
                !oneSquar?.classList.contains("cruiserPlace") &&
                !oneSquar?.classList.contains("submarinePlace") &&
                !oneSquar?.classList.contains("destroyerPlace") &&
                !overLapProblem?.classList.contains("destroyerPlace") &&
                !overLapProblem?.classList.contains("cruiserPlace") &&
                !overLapProblem?.classList.contains("submarinePlace") &&
                !overLapProblem?.classList.contains("empty") &&
                !battleshipProblem?.classList.contains("empty")
              ) {
                elements?.classList.add("battlershipPlace");
                elements?.classList.remove("empty");
                ship.classList.remove("actived");
                ship.classList.remove("battleship");
              }
            }
          } else {
            if (
              ship?.classList.contains("battleship") &&
              squar.classList.contains("battlershipPlace")
            ) {
              for (let i = 0; i < battleship.length; i++) {
                const elements = document.getElementById(`${idValue + i}`);
                const oneSquar = document.getElementById(
                  `${idValue + battleship.length - 1}`
                );
                const overLapProblem = document.getElementById(
                  `${idValue + battleship.length - 3}`
                );
                if (
                  !oneSquar?.classList.contains("carrierPlace") &&
                  !oneSquar?.classList.contains("cruiserPlace") &&
                  !oneSquar?.classList.contains("submarinePlace") &&
                  !oneSquar?.classList.contains("destroyerPlace") &&
                  !overLapProblem?.classList.contains("destroyerPlace") &&
                  !oneSquar?.classList.contains("empty")
                ) {
                  elements?.classList.add("battlershipPlace");
                  elements?.classList.remove("empty");
                  ship.classList.remove("actived");
                  ship.classList.remove("battleship");
                }
              }
            }
          }

          if (
            ship?.classList.contains("cruiser") &&
            squar.classList.contains("cruiserPlace") &&
            Shipsharbor?.classList.contains("NaVertical") &&
            ship.classList.contains("vertical")
          ) {
            for (let i = 0; i < cruiser.length; i++) {
              const elements = document.getElementById(`${idValue + i * 10}`);
              const oneSquar = document.getElementById(`${idValue + 20}`);
              const overLapProblem = document.getElementById(`${idValue + 20}`);
              const cruiserProblem = document.getElementById(`${idValue} `);
              if (
                !oneSquar?.classList.contains("battlershipPlace") &&
                !oneSquar?.classList.contains("carrierPlace") &&
                !oneSquar?.classList.contains("submarinePlace") &&
                !oneSquar?.classList.contains("destroyerPlace") &&
                !overLapProblem?.classList.contains("destroyerPlace") &&
                !overLapProblem?.classList.contains("battlershipPlace") &&
                !overLapProblem?.classList.contains("submarinePlace") &&
                !overLapProblem?.classList.contains("empty") &&
                !cruiserProblem?.classList.contains("empty")
              ) {
                elements?.classList.add("cruiserPlace");
                elements?.classList.remove("empty");
                ship.classList.remove("actived");
                ship.classList.remove("cruiser");
              }
            }
          } else {
            if (
              ship?.classList.contains("cruiser") &&
              squar.classList.contains("cruiserPlace")
            ) {
              for (let i = 0; i < cruiser.length; i++) {
                const elements = document.getElementById(`${idValue + i}`);
                const oneSquar = document.getElementById(
                  `${idValue + cruiser.length - 1}`
                );
                if (
                  !oneSquar?.classList.contains("battlershipPlace") &&
                  !oneSquar?.classList.contains("carrierPlace") &&
                  !oneSquar?.classList.contains("submarinePlace") &&
                  !oneSquar?.classList.contains("destroyerPlace") &&
                  !oneSquar?.classList.contains("empty")
                ) {
                  elements?.classList.add("cruiserPlace");
                  elements?.classList.remove("empty");
                  ship.classList.remove("actived");
                  ship.classList.remove("cruiser");
                }
              }
            }
          }

          if (
            ship?.classList.contains("submarine") &&
            squar.classList.contains("submarinePlace") &&
            Shipsharbor?.classList.contains("NaVertical") &&
            ship.classList.contains("vertical")
          ) {
            for (let i = 0; i < submarine.length; i++) {
              const elements = document.getElementById(`${idValue + i * 10}`);
              const oneSquar = document.getElementById(`${idValue + 20}`);
              const overLapProblem = document.getElementById(`${idValue + 20}`);
              const submarineProblem = document.getElementById(`${idValue} `);
              if (
                !oneSquar?.classList.contains("battlershipPlace") &&
                !oneSquar?.classList.contains("carrierPlace") &&
                !oneSquar?.classList.contains("cruiserPlace") &&
                !oneSquar?.classList.contains("destroyerPlace") &&
                !overLapProblem?.classList.contains("destroyerPlace") &&
                !overLapProblem?.classList.contains("battlershipPlace") &&
                !overLapProblem?.classList.contains("cruiserPlace") &&
                !overLapProblem?.classList.contains("empty") &&
                !submarineProblem?.classList.contains("empty")
              ) {
                elements?.classList.add("submarinePlace");
                elements?.classList.remove("empty");
                ship.classList.remove("actived");
                ship.classList.remove("submarine");
              }
            }
          } else {
            if (
              ship?.classList.contains("submarine") &&
              squar.classList.contains("submarinePlace")
            ) {
              for (let i = 0; i < submarine.length; i++) {
                const elements = document.getElementById(`${idValue + i}`);
                const oneSquar = document.getElementById(
                  `${idValue + submarine.length - 1}`
                );
                if (
                  !oneSquar?.classList.contains("battlershipPlace") &&
                  !oneSquar?.classList.contains("carrierPlace") &&
                  !oneSquar?.classList.contains("cruiserPlace") &&
                  !oneSquar?.classList.contains("destroyerPlace") &&
                  !oneSquar?.classList.contains("empty")
                ) {
                  elements?.classList.add("submarinePlace");
                  elements?.classList.remove("empty");
                  ship.classList.remove("actived");
                  ship.classList.remove("submarine");
                }
              }
            }
          }

          if (
            ship?.classList.contains("destroyer") &&
            squar.classList.contains("destroyerPlace") &&
            Shipsharbor?.classList.contains("NaVertical") &&
            ship.classList.contains("vertical")
          ) {
            for (let i = 0; i < destroyer.length; i++) {
              const elements = document.getElementById(`${idValue + i * 10}`);
              const oneSquar = document.getElementById(`${idValue + 10}`);
              if (
                !oneSquar?.classList.contains("battlershipPlace") &&
                !oneSquar?.classList.contains("carrierPlace") &&
                !oneSquar?.classList.contains("cruiserPlace") &&
                !oneSquar?.classList.contains("submarinePlace") &&
                !oneSquar?.classList.contains("empty")
              ) {
                elements?.classList.add("destroyerPlace");
                elements?.classList.remove("empty");
                ship.classList.remove("actived");
                ship.classList.remove("destroyer");
              }
            }
          } else {
            if (
              ship?.classList.contains("destroyer") &&
              squar.classList.contains("destroyerPlace")
            ) {
              for (let i = 0; i < destroyer.length; i++) {
                const elements = document.getElementById(`${idValue + i}`);

                const oneSquar = document.getElementById(
                  `${idValue + destroyer.length - 1}`
                );
                if (
                  !oneSquar?.classList.contains("battlershipPlace") &&
                  !oneSquar?.classList.contains("carrierPlace") &&
                  !oneSquar?.classList.contains("cruiserPlace") &&
                  !oneSquar?.classList.contains("submarinePlace")
                ) {
                  elements?.classList.add("destroyerPlace");
                  elements?.classList.remove("empty");
                  ship.classList.remove("actived");
                  ship.classList.remove("destroyer");
                }
              }
            }
          }
        });
      });
    });
  };
  const ChangingDirection = () => {
    //Para previnir double click useState
    const MudandoAngulo = document.querySelector(".MudandoAngulo");
    const Ships = document.querySelectorAll(".Ships");
    const Shipsharbor = document.querySelector(".Shipsharbor");
    const [clicked, setClicked] = useState(false);
    const ClickHandle = () => {
      if (!clicked) {
        if (MudandoAngulo) MudandoAngulo.textContent = "X";
        Shipsharbor?.classList.remove("NaVertical");
        Ships.forEach((ship) => {
          ship.classList.remove("vertical");
        });
        setClicked(true);
      }

      if (clicked) {
        if (MudandoAngulo) MudandoAngulo.textContent = "Y";
        Shipsharbor?.classList.add("NaVertical");

        Ships.forEach((ship) => {
          ship.classList.add("vertical");
        });
        setClicked(false);
      }
    };

    return (
      <button className="MudandoAngulo horizontal" onClick={ClickHandle}>
        X
      </button>
    );
  };

  const Starting = () => {
    const AiBoard = document.querySelector(".AiBoard");
    const MudandoAngulo = document.querySelector(".MudandoAngulo");
    const StartButton = document.querySelector(".StartButton");
    const Information = document.querySelector(".Information");
    const shipsharbor = document.querySelector(".Shipsharbor")
    AiBoard?.classList.remove("DisplayOff");
    MudandoAngulo?.classList.add("DisplayOff");

    if (!StartButton?.classList.contains("DisplayOff")) {
      StartButton?.classList.add("DisplayOff");
    }
    if (Information) Information.textContent = "Make your move";
    PlacingAiShips();
    shipsharbor?.classList.remove("Shipsharbor");
  };

  return (
    <div className="PlacingPieces DisplayOff">
      <h1>
        <span className="commanderName"></span>{" "}
        <span className="Information">
          Place your: <span className="ShipClicked"></span>
        </span>
      </h1>
      <ChangingDirection />
      <button className="DisplayOff StartButton" onClick={Starting}>
        Start Game
      </button>
      <div id="boards">
        <Squars />
        <AiBoard />
      </div>

     
      <div className="Shipsharbor">
        <div
          className="carrier Ships "
          id="Carrier"
          onClick={SelectedShip}
        ></div>
        <div
          className="battleship Ships"
          id="Battleship"
          onClick={SelectedShip}
        ></div>
        <div
          className="cruiser Ships"
          id="Cruiser"
          onClick={SelectedShip}
        ></div>
        <div
          className="submarine Ships"
          id="Submarine"
          onClick={SelectedShip}
        ></div>
        <div
          className="destroyer Ships"
          id="Destroyer"
          onClick={SelectedShip}
        ></div>
      </div>
    </div>
  );
};
