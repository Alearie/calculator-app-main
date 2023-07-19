import { useState } from "react";
import "./App.css";

function App() {
  const themes = ["theme1", "theme2", "theme3"];
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);

  const handleButtonClick = (theme) => {
    setSelectedTheme(theme);
    document.documentElement.style.setProperty("--bg-color", theme);

    if (theme === "theme1") {
      document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    } else if (theme === "theme2") {
      document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    } else if (theme === "theme3") {
      document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    }
  };

  return (
    <div className={`${selectedTheme}`}>
      <div className={`container  ${selectedTheme}`}>
        <h2>calc</h2>
        <div className={`toggle-state-numbers ${selectedTheme}`}>
          <h5>1 2 3</h5>
        </div>
        <div className="toggle-container">
          <div className={`tri-state-toggle ${selectedTheme}`}>
            <h5>THEME</h5>
            {themes.map((theme, index) => (
              <input
                key={index}
                className="button"
                type="radio"
                name="toggle"
                id={`theme-${index}`}
                checked={selectedTheme === theme}
                onChange={() => handleButtonClick(theme)}
              />
            ))}
          </div>
        </div>
        <div className={`grid-output ${selectedTheme}`}>399,981</div>
        <div className={`grid-container ${selectedTheme}`}>
          <button className={`grid-item dark ${selectedTheme}`}>7</button>
          <button className={`grid-item dark ${selectedTheme}`}>8</button>
          <button className={`grid-item dark ${selectedTheme}`}>9</button>
          <button className={`grid-item light ${selectedTheme}`}>DEL</button>
          <button className={`grid-item dark ${selectedTheme}`}>4</button>
          <button className={`grid-item dark ${selectedTheme}`}>5</button>
          <button className={`grid-item dark ${selectedTheme}`}>6</button>
          <button className={`grid-item dark ${selectedTheme}`}>+</button>
          <button className={`grid-item dark ${selectedTheme}`}>1</button>
          <button className={`grid-item dark ${selectedTheme}`}>2</button>
          <button className={`grid-item dark ${selectedTheme}`}>3</button>
          <button className={`grid-item dark ${selectedTheme}`}>-</button>
          <button className={`grid-item dark ${selectedTheme}`}>.</button>
          <button className={`grid-item dark ${selectedTheme}`}>0</button>
          <button className={`grid-item dark ${selectedTheme}`}>/</button>
          <button className={`grid-item dark ${selectedTheme}`}>x</button>
          <button className={`grid-item reset light ${selectedTheme}`}>RESET</button>
          <button className={`grid-item equals ${selectedTheme}`}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
