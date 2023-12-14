import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div className="Home OffDisplay">
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
          />
        </label>
        <button>Start</button>
      </div>
      <Footer />
    </div>
  );
};
