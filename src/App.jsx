import { useState } from "react";
import "./App.css";

function App() {
  const themes = ["theme1", "theme2", "theme3"];
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const [result, setResult] = useState("");

  // theme chamge
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

  // operation and validation, can not display 2 consecutive dot and operator so it can avoid error, cannot do the dont allow 2 consecutive . within operator (ex: 192.168.3.4 + 8700) so I do add a function that display Error when there is no answer in it LoL
  const clickHandle = (event) => {
    const value = event.target.value;
    const lastChar = result.slice(-1);

    if (value === "." && lastChar === ".") {
      return;
    }

    if ("+-*/".includes(lastChar) && "+-*/".includes(value)) {
      setResult((prevResult) => prevResult.slice(0, -1).concat(value));
    } else {
      setResult((prevResult) => prevResult.concat(value));
    }
  };

  // calculate result
  const calculate = () => {
    if (!"+-*/".includes(result.slice(-1))) {
      try {
        const answer = eval(result).toString();
        setResult(answer);
      } catch (error) {
        setResult("Error");
      }
    }
  };

  // DEL button - clears previous input, clears all input when Error is displayed
  const clearPrev = (event) => {
    const value = event.target.value;
    if (value === "DEL") {
      if (result === "Error") {
        setResult("");
      } else {
        setResult((prevResult) => prevResult.slice(0, -1));
      }
    } else {
      setResult((prevResult) => prevResult.concat(value));
    }
  };

  // RESET clears all input
  const clearDisplay = () => {
    setResult("");
  };

  return (
    <div className={` ${selectedTheme}`}>
      <div className={`container  ${selectedTheme}`}>
        <header>
          <h1>calc</h1>
          <div className="theme">
            <h4> THEME</h4>
            <div className="toggle-container">
              <div className={`tri-state-toggle ${selectedTheme}`}>
                {themes.map((theme, index) => (
                  <input
                    key={index}
                    className="button"
                    type="radio"
                    name="toggle"
                    id={`theme-${theme}`}
                    checked={selectedTheme === theme}
                    onChange={() => handleButtonClick(theme)}
                  />
                ))}
                
                <div className={`toggle-state-numbers ${selectedTheme}`}></div>
              </div>
            </div>
          </div>
        </header>
        <input
          className={`grid-output ${selectedTheme}`}
          value={result}
          placeholder="0"
        />
        <div className={`grid-container ${selectedTheme}`}>
          <button
            className={`grid-item dark ${selectedTheme}`}
            value={"7"}
            onClick={clickHandle}
          >
            7
          </button>
          <button
            className={`grid-item dark ${selectedTheme}`}
            value={"8"}
            onClick={clickHandle}
          >
            8
          </button>
          <button
            className={`grid-item dark ${selectedTheme}`}
            value={"9"}
            onClick={clickHandle}
          >
            9
          </button>
          <button
            className={`grid-item light ${selectedTheme}`}
            value={"DEL"}
            onClick={clearPrev}
          >
            DEL
          </button>
          <button
            className={`grid-item dark ${selectedTheme}`}
            value={"4"}
            onClick={clickHandle}
          >
            4
          </button>
          <button
            className={`grid-item dark ${selectedTheme}`}
            value={"5"}
            onClick={clickHandle}
          >
            5
          </button>
          <button
            className={`grid-item dark ${selectedTheme}`}
            value={"6"}
            onClick={clickHandle}
          >
            6
          </button>
          <button
            className={`grid-item dark ${selectedTheme}`}
            value={"+"}
            onClick={clickHandle}
          >
            +
          </button>
          <button
            className={`grid-item dark ${selectedTheme}`}
            value={"1"}
            onClick={clickHandle}
          >
            1
          </button>
          <button
            className={`grid-item dark ${selectedTheme}`}
            value={"2"}
            onClick={clickHandle}
          >
            2
          </button>
          <button
            className={`grid-item dark ${selectedTheme}`}
            value={"3"}
            onClick={clickHandle}
          >
            3
          </button>
          <button
            className={`grid-item dark ${selectedTheme}`}
            value={"-"}
            onClick={clickHandle}
          >
            -
          </button>
          <button
            className={`grid-item dark ${selectedTheme}`}
            value={"."}
            onClick={clickHandle}
          >
            .
          </button>
          <button
            className={`grid-item dark ${selectedTheme}`}
            value={"0"}
            onClick={clickHandle}
          >
            0
          </button>
          <button
            className={`grid-item dark ${selectedTheme}`}
            value={"/"}
            onClick={clickHandle}
          >
            /
          </button>
          <button
            className={`grid-item dark ${selectedTheme}`}
            value={"*"}
            onClick={clickHandle}
          >
            x
          </button>
          <button
            className={`grid-item reset light ${selectedTheme}`}
            value={"RESET"}
            onClick={clearDisplay}
          >
            RESET
          </button>
          <button
            className={`grid-item equals ${selectedTheme}`}
            value={"="}
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
