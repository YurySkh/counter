import "./App.css";
import s from "./styles/Styles.module.css";
import { Display } from "./components/Display";
import { StyleContainer } from "./components/StyleContainer";
import { useState } from "react";
import { Button } from "./components/Button";

function App() {
  const minСounterValue = 0;
  const maxСounterValue = 5;

  const [counter, setCounter] = useState(minСounterValue);

  const increaseСounter = () => {
    if (counter < maxСounterValue) {
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  const resetСounter = () => {
    setCounter(minСounterValue);
  };

  return (
    <StyleContainer>
      <div className={s.main}>
        <Display counter={counter} maxСounterValue={maxСounterValue} />
        <div className={s.controlMenu}>
          <Button
            title={"Inc"}
            onChange={increaseСounter}
            disabled={counter === maxСounterValue}
          />
          <Button
            title={"Reset"}
            onChange={resetСounter}
            disabled={counter === minСounterValue}
          />
        </div>
      </div>
    </StyleContainer>
  );
}

export default App;
